/* global angular */

angular.module('template', [])
.controller('MainCtrl', function($scope){

  var data;

  $scope.get = function(){
    nodered($scope, 'http://chyld-nodered.mybluemix.net/images', 'get', null, function(response){
      $scope.images = response.response;
    });
  };

  $scope.upload = function(){
    Webcam.upload(data, '/upload', function(){
      console.log('file is finished uploading');
    });
  };

  $scope.start = function(){
    Webcam.attach('#camera');
  };

  $scope.reset = function(){
    Webcam.reset();
  };

  $scope.snap = function(){
    Webcam.snap( function(data_uri) {
      data = data_uri;
      document.getElementById('result').innerHTML = '<img src="' + data_uri + '"/>';
    });
  };

});
