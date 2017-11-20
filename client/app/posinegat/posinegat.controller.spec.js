'use strict';

describe('Component: PosinegatComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var PosinegatComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PosinegatComponent = $componentController('posinegat', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
