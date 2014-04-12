'use strict';

/* Controllers */

var appControllers = angular.module('myApp.controllers', []);

appControllers.controller('LastMatchController', function($scope) {
  $scope.match = {
    'homeTeam': 'Olympique Lyonnais',
    'awayTeam': 'Paris SG',
    'homeScore': 0,
    'awayScore': 1,
    'date': '2014-04-13'
  };
});

appControllers.controller('CalendarController', function($scope) {
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
});
