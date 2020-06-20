let models = require('../models');
var express = require('express');
var router = express.Router();

/* GET ALL */
router.get('/', function(req, res, next) {
    models.members.findAll().then(members =>{
      res.json(members)
    })
  }); 


/* GET ALL */
router.get('/count', function(req, res, next) {
  models.members.findAll().then(members =>{
    res.json({count: members.length})
  })
});

/* GET ONE */
router.get('/:id', function(req, res, next) {
    models.members.findByPk(parseInt(req.params.id)).then(post => {
      res.json(post)
    })
  });




  /* CREATE */
router.post('/', function(req, res, next) {
    models.members.create(req.body).then(() => {
      res.json({ message: "created post"  })
    })
    });

  /* UPDATE */
router.put('/:id', function(req, res) {
    let idmembers = req.params.id;
    models.members
    .update(req.body,{where: { idmembers: idmembers }})
    .then(result => {res.send("Update")}
    );
  });

  /* DELETE */
  router.delete('/:id', function(req, res) {
    models.members.findByPk(req.params.id)
    .then(member=>{
    member.destroy().then(()=>res.send("Delete"))  
    })
  })
    
     


module.exports = router;