var express = require('express');
var router = express.Router();
let models = require('../models'); 
var authService = require('../services/auth'); 

/* GET users listing. */
router.get('/', function (req, res, next) {  //Gets all users in the database. 
   models.users.findAll().then(users => {
    res.json(users);
   });
  
});

router.get('/profile', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
      authService.verifyUser(token) //verify is checking who the user is and if it is authorized. 
        .then(user => {
          if (user) {
            res.send(JSON.stringify(user)); //If correct, send the results in JSON. 
          } else {
            res.status(401);
            res.send('Invalid authentication token'); //If invalid, send result as invalid. 
  } });
    } else {
      res.status(401);
      res.send('Must be logged in');
  } });

  // Create new user if the user is not in the database. 
  router.post('/signup', function(req, res, next) {
    models.users
      .findOrCreate({
        where: {
          Username: req.body.Username
        },
        defaults: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          Password: req.body.Password
  } })
      .spread(function(result, created) {
        if (created) {
          res.send('User successfully created');
        } else {
          res.send('This user already exists');
        }
  }); });
  // Login user and return JWT as cookie
  router.post('/login', function (req, res, next) {
 
    models.users.findOne({  //Get user by id. 
      where: {
        Username: req.body.Username,
        Password: req.body.Password
      }
    }).then(user => { //If user login is invalid, respond with login failed message. 
      if (!user) { 
        return res.status(401).json({
            message: "Login Failed"
    }); }
        if (user) {
          let token = authService.signUser(user); // Creates user token with the auth service function in auth.js
          res.cookie('jwt', token); // adds a cookie. 
          res.send('Login successful');
        } else {
          console.log('Wrong password');
          res.redirect('login') //redirects user to the login screen. 
    } });
    });
router.get('/logout', function (req, res, next) {
        res.cookie('jwt', "", { expires: new Date(0) });
        res.send('Logged out');
        });


module.exports = router;