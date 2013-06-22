'use strict';

/* Controllers */

function DeviceListCtrl($scope, $http) {
  $http.get('devices/devices.json').success(function(data) {
    $scope.devices = data;
  });

  $scope.orderProp = 'age';
}

function DeviceDetailCtrl($scope, $routeParams) {
  $scope.deviceId = $routeParams.deviceId;
}


