'use strict';

(function(){

class PosinegatComponent {
  constructor() {
    this.message = 'Hello';
  }

  numeross(){
  	


  	if (this.num < 0) {
  			this.mjs = "Este numero es Negativo";
  			this.mensaje = true;
  	} if (this.num > 1){
  		this.mjs = "Este numero es positivo";
  			this.mensaje = true;
  	}
  			
  }
}

angular.module('javascriptApp')
  .component('posinegat', {
    templateUrl: 'app/posinegat/posinegat.html',
    controller: PosinegatComponent,
    controllerAs: 'vm'
  });

})();
