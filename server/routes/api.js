const express = require('express');

const userController = require('../controllers/userController');

const authController = require('../controllers/authController')

const snippetController = require('../controllers/snippetController')

const router = express.Router();

router.post('/login', userController.verifyUser, authController.setCookie, (req, res) => {
  res.status(200).json('logged in!');
    // res.redirect('/homepage')
})

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json('Signed up!');
  // res.redirect('/login')
})

router.post('/home', snippetController.createSnippet, (req, res) => {
  res.status(200).json('Created Snippet');
  // res.redirect('/login')
})

router.get('/home', snippetController.getSnippets, (req, res) => {
  res.send(res.locals.snippets);
})

router.delete('/home', snippetController.deleteSnippet, (req, res) => {
  res.status(200).json('Deleted');
})

router.patch('/home', snippetController.editSnippet, (req, res) => {
  res.status(200).json('updated');
})

module.exports = router; 