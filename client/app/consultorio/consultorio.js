'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('consultorio', {
        url: '/consultorio',
        template: '<consultorio></consultorio>'
      });
  });
