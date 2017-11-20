'use strict';

describe('Component: ProduccionComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var ProduccionComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProduccionComponent = $componentController('ProduccionComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
