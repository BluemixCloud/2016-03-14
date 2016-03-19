// -------------------------------------------------------------------------- //

var express = require('express');
var multer = require('multer');
var uuid =  require('node-uuid');
var request = require('request');
var _ = require('lodash');
var ObjectStorage = require('bluemix-object-storage');
var os = new ObjectStorage(process.env.OSUSERID, process.env.OSPASSWORD, process.env.OSPROJECTID);

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

app.post('/upload', uploadr.single('webcam'), function(req, res){
  console.log('IMAGE*****', req.file);
  var img = 'webcam-' + uuid.v1() + '.jpg';

  os.unlock('images')
  .then(function(){
    return os.upload('images', img, req.file.mimetype, req.file.buffer, req.file.size);
  })
  .then(function(){
    var o = {
      url: 'http://chyld-nodered.mybluemix.net/images',
      method: 'post',
      json: true,
      body: {url: 'https://dal.objectstorage.open.softlayer.com/v1/AUTH_' + process.env.OSPROJECTID + '/images/' + img}
    };
    request(o, function(err, response, body){
      console.log('FINISHED UPLOADING TO OBJECT STORAGE');
      res.send({});
    });
  });

});
