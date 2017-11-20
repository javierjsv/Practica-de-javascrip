'use strict';

(function(){

class CometaComponent {
  constructor() {
    this.message = 'Hello';
  }


calcular(){


console.log(this.clave == 3)

		if (this.clave == 3  ||  this.clave == 4) {

			this.mo = parseInt(this.mt) * 0.75 ;

			console.log(this.mo)

		}

		if (this.clave == 1 || this.clave == 5) {

			this.mo = this.mt * 0.80 ;


	

		}


		if (this.clave == 2  ||  this.clave == 6) {

			this.mo = this.mt * 0.85 ;



		}



		if (this.clave == 2 ||  this.clave == 5) {

			this.fb = this.mt * 0.30 ;

		}


		if (this.clave == 3 ||  this.clave == 6) {

			this.fb = this.mt  * 0.35;
		}


		if (this.clave == 1 ||  this.clave == 4) {

			this.fb = this.mt * 0.28;
		}


		this.cp = this.mt + this.mo + this.fb ;

		this.pv =  (this.cp * 0.045 );


		// console.log(this.cp)




		}

}

angular.module('javascriptApp')
  .component('cometa', {
    templateUrl: 'app/cometa/cometa.html',
    controller: CometaComponent,
    controllerAs: 'vm'
  });

})();
