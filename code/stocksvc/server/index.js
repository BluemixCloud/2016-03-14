// -------------------------------------------------------------------------- //

var express = require('express');
var multer = require('multer');
var uuid =  require('node-uuid');
var request = require('request');
var _ = require('lodash');

var openwhisk = require('openwhisk');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOK);

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

// twilio is calling this endpoint
app.post('/quote', function(req, res){
  console.log('MESSAGE from TWILIO:', req.body);
  var symbol = req.body.Body;
  var to = req.body.To;
  var from = req.body.From;

  var key = process.env.OPENWHISK;

  openwhisk('chyld', 'dev', 'stock/quote', key, {symbol: symbol}, function(err, response, body){
    console.log('QUOTE****', body.response.result.payload);
    var quote = body.response.result.payload;
    client.sendMessage({
    to: from,
    from: to,
    body: quote.Name + ' : $' + quote.LastPrice
    }, function(err, responseData) {
    });
  });

  res.send({});
});
