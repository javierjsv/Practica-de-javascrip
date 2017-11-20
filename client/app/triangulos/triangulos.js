'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('triangulos', {
        url: '/triangulos',
        template: '<triangulos></triangulos>'
      });
  });
