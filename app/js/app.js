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
  $routeProvider.when('/allMatches', {templateUrl: 'partials/allMatches.html', controller: 'AllMatchesController'});
  $routeProvider.when('/createNewMatch', {templateUrl: 'partials/createNewMatch.html', controller: 'CreateNewMatchController'});
  $routeProvider.otherwise({redirectTo: '/lastMatch'});
}]);
