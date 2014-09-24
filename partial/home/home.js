angular.module('flyingHighApp')
.controller("HomeCtrl", function($scope, Airport) {
  Airport.query(function(data) {
    $scope.airports = data;
  });
});