'use strict';

describe('Component: ViajesComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var ViajesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ViajesComponent = $componentController('viajes', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
