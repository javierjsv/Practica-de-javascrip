'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('telefonica', {
        url: '/telefonica',
        template: '<telefonica></telefonica>'
      });
  });
