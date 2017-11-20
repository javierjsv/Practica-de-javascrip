'use strict';

describe('Component: TerrenoComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var TerrenoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TerrenoComponent = $componentController('TerrenoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
