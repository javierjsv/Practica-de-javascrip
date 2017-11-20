'use strict';

describe('Component: ConaguaComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var ConaguaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ConaguaComponent = $componentController('conagua', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
