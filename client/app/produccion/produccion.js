'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('produccion', {
        url: '/produccion',
        template: '<produccion></produccion>'
      });
  });
