'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('votaciones', {
        url: '/votaciones',
        template: '<votaciones></votaciones>'
      });
  });
