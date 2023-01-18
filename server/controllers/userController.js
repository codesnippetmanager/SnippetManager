const bcrypt = require('bcrypt');
const db = require('../models/userModel');

const saltRounds = 10;

const userController = {};

userController.verifyUser = (req, res, next) => {
  const plainTextPassword = req.body.password;
  const str = `SELECT * FROM Users WHERE username = '${req.body.username}'`;
  db.query(str, (err, results) => {
    if (!err) {
      if (results.rowCount === 0) {
        return res.status(400).json('Invalid login info');
      }
      const hash = results.rows[0].password;
      bcrypt.compare(plainTextPassword, hash, (err, result) => {
        console.log(hash);
        if (result == true) {
          return next();
        }
        return res.status(400).json('Invalid login info');
      });
    } else {
      return res.status(400).json('Invalid login info');
    }
  });
};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      const str = `INSERT INTO Users (username, password) VALUES ('${username}', '${hash}')`;
      db.query(str, (err, result) => {
        if (!err) {
          return next();
        }
        return res.status(400).json('username taken');
      });
    });
  });
};

module.exports = userController;
