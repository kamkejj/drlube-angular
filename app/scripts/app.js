'use strict';

/**
 * @ngdoc overview
 * @name angularDrlubeApp
 * @description
 * # angularDrlubeApp
 *
 * Main module of the application.
 */
angular
  .module('angularDrlubeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    /*$scope.getClass = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    };*/

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
