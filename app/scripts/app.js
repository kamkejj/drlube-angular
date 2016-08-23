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

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'NodeCtrl',
        controllerAs: 'main'
      })
      .when('/home/:uuid', {
        templateUrl: 'views/main.html',
        controller: 'NodeCtrl',
        controllerAs: 'main'
      })
      .when('/services/:uuid', {
        templateUrl: 'views/main.html',
        controller: 'NodeCtrl',
        controllerAs: 'main'
      })
      .when('/contact/:uuid', {
        templateUrl: 'views/main.html',
        controller: 'NodeCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
