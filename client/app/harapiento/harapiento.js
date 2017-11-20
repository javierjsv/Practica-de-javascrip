'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('harapiento', {
        url: '/harapiento',
        template: '<harapiento></harapiento>'
      });
  });
