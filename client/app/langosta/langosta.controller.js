'use strict';

(function(){

class LangostaComponent {
  constructor() {
     }

  calcular(){


  	if (this.np <= 200) {
  		this.tot = (this.np * 9500);
  	  	}

  	if (this.np > 200  && this.np <= 300 ) {
  		this.tot = 8500 * this.np ;
  	}


  	if (this.np > 300) {
  		this.tot = this.np * 7500;
  	}
  }
}

angular.module('javascriptApp')
  .component('langosta', {
    templateUrl: 'app/langosta/langosta.html',
    controller: LangostaComponent,
    controllerAs: 'vm'
  });

})();
