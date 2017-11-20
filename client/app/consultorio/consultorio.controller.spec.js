'use strict';

describe('Component: ConsultorioComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var ConsultorioComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ConsultorioComponent = $componentController('consultorio', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
