/**
 * Created by Vishw on 12/27/2016.
 */
(function () {
    'use strict';
    var app = angular.module('myApp',['ngRoute']);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/notes',{
                templateUrl:'view/notes.view.html',
                controller:'NotesController'
            })
            .otherwise({redirectTo:'/notes'});
    }])
})();
