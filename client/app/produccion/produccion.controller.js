'use strict';
(function(){

class ProduccionComponent {
  constructor() {
    this.message = 'Hello';
    this.galon = 3.785;
  }

  produccion(){
    this.tg = (this.l/this.galon);
    this.ga = (this.pg*this.tg);

  }

}

angular.module('javascriptApp')
  .component('produccion', {
    templateUrl: 'app/produccion/produccion.html',
    controller: ProduccionComponent,
    controllerAs:'vm'
  });

})();
