'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('langosta', {
        url: '/langosta',
        template: '<langosta></langosta>'
      });
  });
