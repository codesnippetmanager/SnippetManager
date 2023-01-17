const express = require('express');

const userController = require('../controllers/userController');

const authController = require('../controllers/authController')

const router = express.Router();

router.get('/login', userController.verifyUser, authController.setCookie, (req, res) => {
  if(res.locals.verified === true){
    res.redirect('/home');
  } 
})

router.post('/signup', userController.createUser, (req, res) => {
  res.redirect('/login')
})

module.exports = router; 