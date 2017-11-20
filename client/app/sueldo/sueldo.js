'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sueldo', {
        url: '/sueldo',
        template: '<sueldo></sueldo>'
      });
  });
