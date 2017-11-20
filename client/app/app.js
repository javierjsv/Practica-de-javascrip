'use strict';

angular.module('javascriptApp', ['javascriptApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
