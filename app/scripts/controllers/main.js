'use strict';

/**
 * @ngdoc function
 * @name angularDrlubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrlubeApp
 */
angular.module('angularDrlubeApp')
  .controller('MainCtrl', function ($scope, $http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
