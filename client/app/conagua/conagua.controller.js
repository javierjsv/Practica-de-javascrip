'use strict';

(function(){

class ConaguaComponent {
  constructor() {
    this.message = 'Hello';
  }

totalCon(){
	this.volumen = this.n * this.a * this.l;
	this.pagos =  this.volumen * this.cm ;
	
 }

}

angular.module('javascriptApp')
  .component('conagua', {
    templateUrl: 'app/conagua/conagua.html',
    controller: ConaguaComponent,
    controllerAs: 'vm'
  });

})();
