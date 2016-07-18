'use strict';


var app = angular.module('myApp', ['ui.router', 'ngFileUpload']);



app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html'
    })
    .state('upload', {
      url: '/upload', 
      templateUrl: '/html/upload.html',
      controller: 'uploadCtrl'
    })

  $urlRouterProvider.otherwise('/');
})