'use strict';

/* App Module */

angular.module('dodedodo', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/devices', {templateUrl: 'partials/device-list.html', controller: DeviceListCtrl}).
      when('/devices/:deviceId', {templateUrl: 'partials/device-detail.html', controller: DeviceDetailCtrl}).
      otherwise({redirectTo: '/devices'});
}]);

