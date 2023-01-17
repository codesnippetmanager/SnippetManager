const db = require('../models/userModel');

const authController = {};

authController.setCookie = (req, res, next) => {
  if(res.locals.verified == true){
    res.cookie('token', 'verified');
    return next();
  } else{
    return res.status(400).json('Invalid login info');
  }
};

authController.verifyCookie = (req, res, next) => {
  if(req.cookies.token === 'admin'){
    return next();
  } else{
    return res.status(400).json('You must be signed in to view this page')
  }
}

module.exports = authController;