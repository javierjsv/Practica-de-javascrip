'use strict';

describe('Component: TriNgulosComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var TriNgulosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TriNgulosComponent = $componentController('TriNgulosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
