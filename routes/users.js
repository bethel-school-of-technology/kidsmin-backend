let models = require('../models');
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
  models.users.findAll().then(users =>{
    res.json(users)
  })
});

/* CREATE users listing. */
router.post('/', function(req, res) {
  models.users.create(req.body).then(() => {
    res.json({ message: "create post"  })
  })
});

module.exports = router;
