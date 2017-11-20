'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('naufrago', {
        url: '/naufrago',
        template: '<naufrago></naufrago>'
      });
  });
