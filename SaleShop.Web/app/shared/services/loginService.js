﻿(function (app) {
    'use strict';
    app.service('loginService', ['$http', '$q', 'authenticationService', 'authData',
        function ($http, $q, authenticationService, authData) {
            var userInfo;
            var deferred;

            this.login = function (userName, password) {
                deferred = $q.defer();
                var data = "grant_type=password&username=" + userName + "&password=" + password;
                //console.log(data);
                $http.post('/oauth/token', data, {
                        headers:
                            { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
                    //console.log("response");
                    userInfo = {
                        accessToken: response.data.access_token,
                        userName: userName
                    };
                    //console.log(userInfo);
                    authenticationService.setTokenInfo(userInfo);
                    authData.authenticationData.IsAuthenticated = true;
                    authData.authenticationData.userName = userName;
                    deferred.resolve(null);
                    }, (function (err, status) {
                    console.log("err");
                    authData.authenticationData.IsAuthenticated = false;
                    authData.authenticationData.userName = "";
                    deferred.resolve(err);
                    }));
                //console.log(deferred.promise);

                return deferred.promise;
            }

            this.logOut = function () {
                authenticationService.removeToken();
                authData.authenticationData.IsAuthenticated = false;
                authData.authenticationData.userName = "";
                authData.authenticationData.accessToken = null;
            }
        }]);
})(angular.module('saleshop.common'));