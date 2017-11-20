'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('planocarteseano', {
        url: '/planocarteseano',
        template: '<planocarteseano></planocarteseano>'
      });
  });
