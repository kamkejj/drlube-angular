'use strict';

/**
 * @ngdoc function
 * @name angularDrlubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrlubeApp
 */
angular.module('angularDrlubeApp')
  .controller('HeaderCtrl', function ($scope, $location, $http) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
