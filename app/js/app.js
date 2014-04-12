'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lastMatch', {templateUrl: 'partials/lastMatch.html', controller: 'LastMatchController'});
  $routeProvider.when('/calendar', {templateUrl: 'partials/calendar.html', controller: 'CalendarController'});
  $routeProvider.otherwise({redirectTo: '/match'});
}]);
