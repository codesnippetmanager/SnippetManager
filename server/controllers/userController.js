const db = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

userController.verifyUser = (req, res, next) => {
  const str = `SELECT * FROM users WHERE username = ${req.body.username}`;
  db.query(str, (err, result) => {
    if(!err){
      bcrypt.compare(result.password, hash, function(err, result) {
        if(result === true){
          res.locals.verified = true;
          return next();
        }
      });
    } 
    res.locals.verified = false;
    return res.status(400).json('Invalid login info');
  })
};

userController.createUser = (req, res, next) => {
  const {username, password, first_name, last_name} = req.body;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      const str = `INSERT INTO users (username, password, first_name, last_name) VALUES {'${username}', '${hash}', '${first_name}', '${last_name}'}`
      db.query(str, (err, result) =>{
        return next();
      });
    });
  });
}

module.exports = userController;