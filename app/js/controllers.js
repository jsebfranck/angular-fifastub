'use strict';

/* Controllers */

var appControllers = angular.module('myApp.controllers', []);

appControllers.controller('LastMatchController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/match/lastMatch')
       .success(function(data) {
         $scope.match = data;
       })
       .error(function(response) {
         console.log('Cannot access to server', response);
       });
}]);

appControllers.controller('CalendarController', ['$scope', '$http', function($scope, $http) {
  $scope.matches = [
    {'homeTeam': 'Olympique Lyonnais',
     'awayTeam': 'Paris SG',
     'date': '2014-04-19'
    },
    {'homeTeam': 'Toulouse',
     'awayTeam': 'Olympique Lyonnais',
     'date': '2014-04-20'
    },
    {
     'homeTeam': 'Olympique Lyonnais',
     'awayTeam': 'Bastia',
     'date': '2014-04-26'
    }];
}]);

appControllers.controller('CreateNewMatchController', ['$scope', '$http', function($scope, $http) {
  $scope.createNewMatch = function() {
    console.log('client side, create new match : ', this.match);

    $http.post('http://localhost:3000/match/createNewMatch', this.match)
         .success(function(data) {
           console.log('Match has been created');
         })
         .error(function(response) {
           console.log('Match cannot be created', response);
         });
  };
}]);
