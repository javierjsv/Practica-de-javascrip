'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viajes', {
        url: '/viajes',
        template: '<viajes></viajes>'
      });
  });
