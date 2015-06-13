//Middleware for Twitter OAuth Echo Authentication

var request = require('request');

module.exports = function (config) {

  return function (req, res, next) {
  
    //get Twitter auth info 
    var verifyUrl = req.headers['x-auth-service-provider'];
    var authorization_header = req.headers['x-verify-credentials-authorization'];
  
    //prepare the request body for requesting twitter server
    var options = {
      url: verifyUrl,
      headers: {
        Authorization: authorization_header
      }
    };
  
    //request twitter server 
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        next();
      } else {
        res.status(401).send(config ? config.errorMessage :  'UnAuthorized');
      }
    });
    
  };
};