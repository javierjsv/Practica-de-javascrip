'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('conagua', {
        url: '/conagua',
        template: '<conagua></conagua>'
      });
  });
