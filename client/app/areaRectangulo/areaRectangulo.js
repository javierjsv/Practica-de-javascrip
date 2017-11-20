'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('areaRectangulo', {
        url: '/areaRectangulo',
        template: '<area-rectangulo></area-rectangulo>'
      });
  });
