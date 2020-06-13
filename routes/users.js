var express = require('express');
var router = express.Router();
let models = require('../models'); //<--- Add models
var authService = require('../services/auth'); //<--- Add authentication service

/* GET users listing. */
router.get('/', function (req, res, next) {
   models.users.findAll().then(users => {
    res.json(users);
   });
  
});

router.get('/profile', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
      authService.verifyUser(token)
        .then(user => {
          if (user) {
            res.send(JSON.stringify(user));
          } else {
            res.status(401);
            res.send('Invalid authentication token');
  } });
    } else {
      res.status(401);
      res.send('Must be logged in');
  } });

  // Create new user if one doesn't exist
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
    models.users.findOne({
      where: {
        Username: req.body.Username,
        Password: req.body.Password
      }
    }).then(user => {
      if (!user) { 
        return res.status(401).json({
            message: "Login Failed"
    }); }
        if (user) {
          let token = authService.signUser(user); // <--- Uses the authService to create jwt token
          res.cookie('jwt', token); // <--- Adds token to response as a cookie
          res.send('Login successful');
        } else {
          console.log('Wrong password');
          res.redirect('login')
    } });
    });
router.get('/logout', function (req, res, next) {
        res.cookie('jwt', "", { expires: new Date(0) });
        res.send('Logged out');
        });


module.exports = router;