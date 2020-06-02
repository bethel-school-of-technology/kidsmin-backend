let models = require('../models');
var express = require('express');
var router = express.Router();

/* GET ALL */
router.get('/', function(req, res, next) {
    models.members.findAll().then(members =>{
      res.json(members)
    })
});

/* GET ONE */
router.get('/:id', function(req, res, next) {
    models.members.findByPk(parseInt(req.params.id)).then(post =>{
      res.json(post)
    })
  });

  
  /* CREATE */
router.post('/', function(req, res, next) {
    models.members.create(req.body).then(() => {
      res.json({message: 'created post'})
    })
    });


  /* UPDATE */
router.put('/', function(req, res, next) {
    res.send("Update");
  });

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.send("Delete");
  });


module.exports = router;