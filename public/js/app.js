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
  $routeProvider.when('/groupedProjects', {templateUrl: 'partials/projectsList.html', controller: 'MyCtrl1'});
  $routeProvider.when('/groupedProjects/:itemRID', {templateUrl: 'partials/projectDetails.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view4', {templateUrl: 'partials/partial4.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/groupedProjects'});
}]);
