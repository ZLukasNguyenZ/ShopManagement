﻿/// <reference path="/Assets/admin/libs/angular/angular.js" />

(function () {
    angular.module('saleshop.application_users', ['saleshop.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider.state('application_users', {
                url: "/application_users",
                templateUrl: "/app/components/application_users/applicationUserListView.html",
                parent: 'base',
                controller: "applicationUserListController"
            })
            .state('add_application_user', {
                url: "/add_application_user",
                parent: 'base',
                templateUrl: "/app/components/application_users/applicationUserAddView.html",
                controller: "applicationUserAddController"
            })
            .state('edit_application_user', {
                url: "/edit_application_user/:id",
                parent: 'base',
                templateUrl: "/app/components/application_users/applicationUserEditView.html",
                controller: "applicationUserEditController"
            });
    }
})();