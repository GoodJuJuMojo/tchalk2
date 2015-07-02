'use strict';

angular.module('Home')

.factory('HomeService',
    ['$http', '$cookieStore', '$rootScope', 
    function ($http, $cookieStore, $rootScope) {
        var service = {};
        console.log('rs', $rootScope); ///

        service.getUser = function (userid, callback) {
            $http.get('/wordpress/wp-json/users/' + userid)
                .success(function (response) {
                    console.log("GET success!(in HomeService)"); ///
                    console.log('response.username(from wp)(in HomeService)', response.username); ///
                    console.log('response.ID(from wp)(in HomeService)', response.ID); ///
                    console.log(response); ///

                    callback(response);
                })
               .error(function() {
                    console.log("GET failed"); ///

                });
           };

        service.StoreUser = function () {
            alert('Home service.StoreUser');
            
        };


        return service;


    }]);