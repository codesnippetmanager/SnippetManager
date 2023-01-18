const db = require('../models/userModel');

const authController = {};

authController.setCookie = (req, res, next) => {
  res.cookie('token', 'verified');
  return next();
};

authController.verifyCookie = (req, res, next) => {
  if(req.cookies.token === 'verified'){
    return next();
  } else{
    return res.status(400).json('You must be signed in to view this page')
  }
}

module.exports = authController;