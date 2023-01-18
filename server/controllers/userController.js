const db = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

userController.verifyUser = (req, res, next) => {
  const plainTextPassword = req.body.password;
  const str = `SELECT * FROM Users WHERE username = '${req.body.username}'`;
  db.query(str, (err, results) => {
    if(!err){
      if(results.rowCount === 0){
        return res.status(400).json('Invalid login info');
      }
      const hash = results.rows[0].password
      bcrypt.compare(plainTextPassword, hash, function(err, result) {
        if(result == true){
          return next();
        }
      });
    } else{
      return res.status(400).json('Invalid login info');
    }
  })
};

userController.createUser = (req, res, next) => {
  const {username, password} = req.body;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      const str = `INSERT INTO Users (username, password) VALUES ('${username}', '${hash}')`
      db.query(str, (err, result) =>{
        if(!err){
          return next();
        }
        return next()
      });
    });
  });
}

module.exports = userController;