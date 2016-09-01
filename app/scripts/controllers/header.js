'use strict';

/**
 * @ngdoc function
 * @name angularDrlubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrlubeApp
 */
angular.module('angularDrlubeApp')
  .controller('HeaderCtrl', function ($scope, $location, $http, drlubeService, $cacheFactory) {
    $scope.mainMenu = [];
    var path = '';

    var conf = drlubeService.getConf();
    conf.then(function(data) {
      var basePath = data;

      path = basePath[0].baseURL + 'v1/menu';

      $http.get(path).then(function (result) {
        if (result.status === 200) {
          //var httpCache = $cacheFactory.get('$http');
          $scope.mainMenu = result.data;
        }
      });

    });

    $scope.isActive = function (viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

  });
