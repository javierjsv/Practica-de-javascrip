'use strict';

describe('Component: MayorComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var MayorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MayorComponent = $componentController('mayor', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
