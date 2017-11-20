'use strict';

describe('Component: AreaRectanguloComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var AreaRectanguloComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AreaRectanguloComponent = $componentController('AreaRectanguloComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
