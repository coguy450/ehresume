'use strict';

    var app = angular.module('app', ['ngRoute'])

    .controller('MainController', function ($scope,$http) {
       $scope.helloWorld = 'This is an Angular Variable'
        $scope.user = {name:'Billy Bob'}
            $scope.user._id = 12345;




    })


    .config(['$routeProvider', '$controllerProvider', '$provide', function ($routeProvider) {

            //This can be used for your client side routing
        $routeProvider
            .when('/', {
                templateUrl: 'modules/core/views/main.html',
                controller: 'MainController'
            })



    }]);
