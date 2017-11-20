'use strict';

describe('Component: NaufragoComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var NaufragoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    NaufragoComponent = $componentController('naufrago', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
