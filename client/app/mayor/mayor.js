'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mayor', {
        url: '/mayor',
        template: '<mayor></mayor>'
      });
  });
