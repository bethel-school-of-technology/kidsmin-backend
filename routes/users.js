var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.users.findAll().then(users =>{
    res.json(users)
  })
});

app.post('/', (req, res) => {
const user = { name: req.body.userName, password: req.body.password }
users.push(user)
res.status(201).send()
})
module.exports = router;
