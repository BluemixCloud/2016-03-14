// random.js
/* global whisk */

var request = require('request');

function main(params){
  console.log('square.js being called with params:', params);

  var o = {url: 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16', json: true};
  request(o, function(err, res, body){
    whisk.done({payload: body.data});
  });

  return whisk.async();
}
