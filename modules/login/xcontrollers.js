'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        //$rootScope not used??
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.SetCredentials($scope.username, $scope.password, $scope.userid);
            console.log('...in controller LoginController ', $scope.username, $scope.userid);
            AuthenticationService.Login($scope.username, $scope.password, $scope.userid, function (response) {
                if (response.username === $scope.username) {

                    console.log("...yes........"); ///
                    
                    AuthenticationService.SetCredentials($scope.username, $scope.password, $scope.userid);
                    $location.path('/');
                } else {
                    console.log("...no........"); ///
                    $scope.error = response.message;
                    //AuthenticationService.ClearCredentials();
                    $scope.dataLoading = false;
                    $location.path('/login');
                }
            });
        };
    }]);