const jwt = require('jsonwebtoken');
const models = require('../models/index');
var authService = {
  signUser: function(user) {
    const token = jwt.sign(   //signs token to the user. 
      {
        Username: user.Username,
        UserId: user.UserId
      },
      'secretkey',
      {
        expiresIn: '1h' //the time that the token will last before it will expire. 
      },
      
);

    return token;
  },

verifyUser: function (token) {  //<--- receive JWT token as parameter
    try {
      let decoded = jwt.verify(token, 'secretkey'); // Decrypt token using same key used to encrypt
      return models.users.findByPk(decoded.UserId); //Return result of database query as promise
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}


module.exports = authService;