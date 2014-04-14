'use strict';

/* Controllers */

var appControllers = angular.module('myApp.controllers', []);

appControllers.controller('AllMatchesController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/match/all')
       .success(function(data) {
         $scope.matches = data;
         console.log('Retrieved ' + data.length + ' matches');
       })
       .error(function(response) {
         console.log('Cannot access to server', response);
       });
}]);

appControllers.controller('CreateNewMatchController', ['$scope', '$http', function($scope, $http) {
  $scope.createNewMatch = function() {
    console.log('Create a new match : ', this.match);

    $http.post('http://localhost:3000/match/createNewMatch', this.match)
         .success(function(data) {
           console.log('Match has been created');
         })
         .error(function(response) {
           console.log('Match cannot be created', response);
         });
  };
}]);
