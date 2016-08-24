'use strict';

/**
 * @ngdoc function
 * @name angularDrlubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrlubeApp
 */
angular.module('angularDrlubeApp')
  .controller('NodeCtrl', function ($routeParams, $scope, $http, drlubeService) {
    $scope.node = {};
    var path = '';

    var conf = drlubeService.getConf();
    conf.then(function(data) {
      var basePath = data;

      //basePath[0].baseURL
      path = basePath[0].baseURL + 'v1/page/' + $routeParams.uuid;

      $http.get(path).then(function(result) {
        if (result.status === 200) {
          $scope.node = result.data[0];
        }
      });
    });

  });