'use strict';

describe('Component: CircuferenciaComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var CircuferenciaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CircuferenciaComponent = $componentController('CircuferenciaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
