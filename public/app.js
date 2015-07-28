'use strict';

    var app = angular.module('app', ['ngRoute'])

    .controller('MainController', function ($scope,$http) {
       $scope.helloWorld = 'This is an Angular Variable'
        $scope.user = {name:'Billy Bob'}
            $scope.user._id = 12345;


            $scope.create = function(new_survey){
                new_survey.id = $scope.user;
                console.log(new_survey, "new_survey into the client controller"); //
                $scope.Factorycreate(new_survey, function(survey){
                    //console.log(survey, "callback client controller" ); //
                    getAllUsers();
                });
            };

            $scope.Factorycreate = function(info, callback){
                console.log(info, 'info in factory');
                $http.put('/surveys', info).success(function(rtnd_data){
                    console.log(rtnd_data, 'create survey rtn data'); //
                    callback(rtnd_data);
                });
            };


    })


    .config(['$routeProvider', '$controllerProvider', '$provide', function ($routeProvider) {

            //This can be used for your client side routing
        $routeProvider
            .when('/', {
                templateUrl: 'modules/core/views/main.html',
                controller: 'MainController'
            })



    }]);
