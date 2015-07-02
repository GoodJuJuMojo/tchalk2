'use strict';

angular.module('Home')

// .controller('HomeController',
//     ['$scope',
//     function ($scope) {

//     }]);

.controller('HomeController',
    ['$scope', '$rootScope', '$location', 'HomeService',
    function ($scope, $rootScope, $location, HomeService) {

        console.log('in HC', $scope.userid);
        $scope.data = function () {
            //$scope.dataLoading = true;
            //HomeService.SetCredentials($scope.username, $scope.password);
            console.log('...in controller HomeController.. ', $rootScope.globals.currentUser);
            HomeService.getUser($rootScope.globals.currentUser.userid, function (response) {
            //     if (response.username === $scope.username) {
            	console.log("...yes........");
            	console.log('r', response);
            	$scope.response = response;
            	console.log('s.r.username', $scope.response.username);
            //         AuthenticationService.SetCredentials($scope.username, $scope.password);
            //         $location.path('/');
            //     } else {
            //         console.log("...no........");
            //         $scope.error = response.message;
            //         //AuthenticationService.ClearCredentials();
            //         $scope.dataLoading = false;
            //         $location.path('/login');
            //     }
             });
        };
    }]);