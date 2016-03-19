// -------------------------------------------------------------------------- //

var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var chrome = require('express-chrome-logger');

// -------------------------------------------------------------------------- //

module.exports = function(app){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../client'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(chrome);

  app.all('/proxy', function(req, res){
      var o = {
        uri: req.query.url,
        method: req.method,
        json: true,
      };

      if(Object.keys(req.body).length){
        o.body = req.body;
      }

      console.log('request to NodeRED:', o);
      request(o, function(e, r, b){
        console.log('response from NodeRED:', b);
        res.send({error: e, status: r.statusCode, request: o, response: b});
      });
  });
};

// -------------------------------------------------------------------------- //
