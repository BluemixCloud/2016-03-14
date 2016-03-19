var request = require("request");

function main(params){
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies';
  var headers = {
    "X-Mashape-Key": params.MASHAPE
  };

  request({url: url, json: true, headers: headers}, function(err, response, body){
    return whisk.done({payload: body});
  });

  return whisk.async();
}
