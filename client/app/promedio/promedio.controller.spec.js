'use strict';

describe('Component: PromedioComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var PromedioComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PromedioComponent = $componentController('PromedioComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
