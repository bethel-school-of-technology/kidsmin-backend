let models = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.users.findAll().then(users =>{
    res.json(users)
  })
});

