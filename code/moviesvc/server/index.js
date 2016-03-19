// -------------------------------------------------------------------------- //

var express = require('express');
var multer = require('multer');
var uuid =  require('node-uuid');
var request = require('request');
var _ = require('lodash');
var openwhisk = require('openwhisk');

// -------------------------------------------------------------------------- //

var app = express();
var storage = multer.memoryStorage();
var uploadr = multer({storage: storage});
require('./vendor/config')(app);

app.listen(process.env.PORT, process.env.IP, function(){
  console.log('[LISTENING] - port:', process.env.PORT, 'ip:', process.env.IP);
});

// -------------------------------------------------------------------------- //

app.get('/hello', function(req, res){
  res.console.log('SERVER: Logging...');
  res.console.log('SERVER: ' + JSON.stringify(req.headers));
  res.send({payload: 'world'});
});

// -------------------------------------------------------------------------- //

app.post('/quote', function(req, res){
  console.log('SLACK*******', req.body);
  openwhisk('chyld', 'dev', 'movie/quote', process.env.OPENWHISK, {MASHAPE: process.env.MASHAPE}, function(err, response, body){
    console.log('QUOTE******', body.response.result.payload.quote);
    res.send({text: body.response.result.payload.quote});
  });
});
