const express = require('express');

const userController = require('../controllers/userController');

const authController = require('../controllers/authController')

const router = express.Router();

router.post('/login', userController.verifyUser, authController.setCookie, (req, res) => {
  res.status(400).json('logged in!');
    // res.redirect('/homepage')
})

router.post('/signup', userController.createUser, (req, res) => {
  res.status(400).json('Signed up!');
  // res.redirect('/login')
})

module.exports = router; 