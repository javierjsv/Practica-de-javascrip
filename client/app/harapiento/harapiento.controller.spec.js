'use strict';

describe('Component: HarapientoComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var HarapientoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    HarapientoComponent = $componentController('harapiento', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
