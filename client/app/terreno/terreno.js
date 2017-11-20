'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('terreno', {
        url: '/terreno',
        template: '<terreno></terreno>'
      });
  });
