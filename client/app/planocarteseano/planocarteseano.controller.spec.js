'use strict';

describe('Component: PlanocarteseanoComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var PlanocarteseanoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PlanocarteseanoComponent = $componentController('planocarteseano', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
