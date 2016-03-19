var request = require("request");

function main(params){
  var symbol = params.symbol.toUpperCase();
  var url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + symbol;

  request({url: url, json: true}, function(err, response, body){
    return whisk.done({payload: body});
  });

  return whisk.async();
}
