'use strict';

describe('Component: VotacionesComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var VotacionesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VotacionesComponent = $componentController('votaciones', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
