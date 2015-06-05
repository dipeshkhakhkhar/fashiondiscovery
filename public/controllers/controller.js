var myApp = angular.module('myApp', ['filters']);

/* Filter to truncate string to 32 words for blurb item */ 
angular.module('filters', []).
    filter('truncate', function () {
        
        return function (inputStr, numOfWords) {
          
          if (isNaN(numOfWords)) {
            return inputStr;
          }
          if (numOfWords <= 0) {
            return '';
          }

          if (inputStr) {
            var inputStrWords = inputStr.split(/\s+/);
            if (inputStrWords.length > numOfWords) {
               inputStr = inputStrWords.slice(0, numOfWords).join(' ') + '\u2026';
            }
          }
          
          return inputStr;
          };
    });


myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

var $container = $('#container');

$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector : '.item',
    columnWidth : 240,
    gutterWidth : 20
  });
});

var refresh = function() {
  $http.get('/itemlist').success(function(response) {
    console.log("Got data from the model");
    console.log(response);
    var temRes = response;
    $scope.itemlist = makeRandom(temRes);
  });
};


/*
$http.get('/itemlist/:pagenumber').success(function(response) {
    console.log("Got next page data from the model");
    console.log(response);
    var temRes = response;
    $scope.itemlist = makeRandom(temRes);
  });
*/

refresh();

}]);﻿

/*Function to get a random number. Seen many places, people using it to set height for the item block */
function getRandomInt (min, max) {
    var randomHeight = Math.floor(Math.random() * (max - min + 1)) + min;
    //alert(randomHeight);
    return randomHeight;
}

/*Randomize 20 items in a page */
function makeRandom(tempRes) {

   var m = tempRes.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = tempRes[m];
    tempRes[m] = tempRes[i];
    tempRes[i] = t;
  }
  
  return tempRes;
}
