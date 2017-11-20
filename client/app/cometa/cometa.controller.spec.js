'use strict';

describe('Component: CometaComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var CometaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CometaComponent = $componentController('cometa', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
