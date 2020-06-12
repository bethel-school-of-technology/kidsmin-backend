const jwt = require('jsonwebtoken');
const models = require('../models/index');

var authService = {
  signUser: function(users) {
    const token = jwt.sign(
      {
        Username: users.userName,
        UserId: users.idusers
      },
      'secretkey',
      {
        expiresIn: '1h'
      }
);
    return token;
  }
}
module.exports = authService;