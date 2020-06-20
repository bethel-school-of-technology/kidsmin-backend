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

module.exports = router;