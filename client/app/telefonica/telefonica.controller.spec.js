'use strict';

describe('Component: TelefonicaComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var TelefonicaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TelefonicaComponent = $componentController('telefonica', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
