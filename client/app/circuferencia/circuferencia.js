'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('circuferencia', {
        url: '/circuferencia',
        template: '<circuferencia></circuferencia>'
      });
  });
