'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posinegat', {
        url: '/posinegat',
        template: '<posinegat></posinegat>'
      });
  });
