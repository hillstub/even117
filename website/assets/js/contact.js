function EmailCtrl($scope, $http) {
  $scope.send = false;
  $scope.failure = false;
  $scope.contact = {};
  $scope.submit = function() {
    $http.post('/contact', $scope.contact).success(function(response)
    {
      if (response.success) {
        $scope.send = true;
        $scope.failure = false;
      } else {
        $scope.send = false;
        $scope.failure = true;
      }
    });

  };
}
