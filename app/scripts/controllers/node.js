'use strict';

/**
 * @ngdoc function
 * @name angularDrlubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrlubeApp
 */
angular.module('angularDrlubeApp')
  .controller('NodeCtrl', function ($routeParams, $scope, $http) {
    $scope.node = {};

    console.log($routeParams.uuid, 'rp');

    var path = '';
    if ($routeParams.uuid !== undefined) {
      path = 'http://api.drlube.dev/v1/page/' + $routeParams.uuid;
    } else {
      path = 'http://api.drlube.dev/v1/page/' + $scope.homeUUID;
    }


    $http.get(path).then(function(result) {
      if (result.status === 200) {
        $scope.node = result.data[0];
      }
    });
  });