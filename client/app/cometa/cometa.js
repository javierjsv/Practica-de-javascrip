'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cometa', {
        url: '/cometa',
        template: '<cometa></cometa>'
      });
  });
