'use strict';

(function(){

class HarapientoComponent {
  constructor() {
    this.message = 'Hello';
  }

  calcular(){

  	
  	if ( this.precio >= 250000 ) {
  		this.mensaje = true;
  		this.precio = this.precio - (this.precio * 0.15) ; 	
  	} 

  	if ( this.precio < 250000 ) {
  		this.mensaje = true;
  		this.precio = this.precio - (this.precio * 0.08) ; 	
  	} 




  	

  }


}

angular.module('javascriptApp')
  .component('harapiento', {
    templateUrl: 'app/harapiento/harapiento.html',
    controller: HarapientoComponent,
    controllerAs: 'vm'
  });

})();
