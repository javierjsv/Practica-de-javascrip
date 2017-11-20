'use strict';
(function(){

class TerrenoComponent {
  constructor() {
    this.message = 'Hello';
  }

  areaTerreno(){
    this.terreno1 = (this.terrenoB * (this.terrenoA - this.terrenoC))/2;
    this.terreno2 = (this.terrenoB * this.terrenoC);
    this.terreno = (this.terreno1 + this.terreno2);
  }
}

angular.module('javascriptApp')
  .component('terreno', {
    templateUrl: 'app/terreno/terreno.html',
    controller: TerrenoComponent,
    controllerAs:'vm'
  });

})();
