'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('promedio', {
        url: '/promedio',
        template: '<promedio></promedio>'
      });
  });
