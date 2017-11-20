'use strict';

describe('Component: LangostaComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var LangostaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    LangostaComponent = $componentController('langosta', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
