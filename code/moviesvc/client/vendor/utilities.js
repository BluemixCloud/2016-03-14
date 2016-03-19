function nodered(scope, url, method, data, cb){
  $.ajax({
    url: '/proxy?url=' + url,
    method: method,
    data: data,
    dataType: 'json',
    success: function(response){
      cb(response);
      scope.$apply();
    }
  });
}

function express(scope, url, method, data, cb){
  $.ajax({
    url: url,
    method: method,
    data: data,
    dataType: 'json',
    success: function(response){
      cb(response);
      scope.$apply();
    }
  });
}
