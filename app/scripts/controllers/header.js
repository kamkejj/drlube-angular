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
    $scope.mainMenu = [];

    $scope.homeUUID = '4a2b35b7-e8fc-4798-9b5a-41c175838381';
    $scope.servicesUUID = '4a2b35b7-e8fc-4798-9b5a-41c175838381';
    $scope.contactUUID = '4a2b35b7-e8fc-4798-9b5a-41c175838381';

    var path = 'http://api.drlube.dev/v1/menu';

    $http.get(path).then(function(result) {
      if (result.status === 200) {
        $scope.mainMenu = result.data;
      }
    });

    $scope.isActive = function (viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

  });
