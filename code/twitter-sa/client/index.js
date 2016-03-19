/* global angular, nodered */

angular.module('template', [])
.controller('MainCtrl', function($scope){
  $scope.getAllTweets = function(){
    nodered($scope, 'http://chyld-nodered.mybluemix.net/all-tweets', 'get', null, function(result){
      $scope.tweets = result.response;
      drawChart($scope.tweets);
    });
  };
});

function drawChart(tweets){
  $('#graph').highcharts({
    title: {
      text: 'Tweet Sentiment Analysis'
    },
    xAxis: {
       categories: tweets.map(function(t, i){return i})
    },
    series: [
     {
       data: tweets.map(function(t){return t.SCORE})
     }
    ]
  });
}
