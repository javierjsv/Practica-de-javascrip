'use strict';

describe('Component: SueldoComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var SueldoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SueldoComponent = $componentController('sueldo', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
