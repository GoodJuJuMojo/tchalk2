'use strict';

angular.module('Login')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'LoginService',
    function ($scope, $rootScope, $location, LoginService) {
        //$rootScope not used??
        // reset login status
        LoginService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            LoginService.SetCredentials($scope.username, $scope.password, $scope.userid);
            console.log('...in controller LoginController ', $scope.username, $scope.userid);
            LoginService.Login($scope.username, $scope.password, $scope.userid, function (response) {
                if (response.username === $scope.username) {

                    console.log("...yes........"); ///
                    
                    LoginService.SetCredentials($scope.username, $scope.password, $scope.userid);
                    $location.path('/');
                } else {
                    console.log("...no........"); ///
                    $scope.error = response.message;
                    //LoginService.ClearCredentials();
                    $scope.dataLoading = false;
                    $location.path('/login');
                }
            });
        };
    }]);