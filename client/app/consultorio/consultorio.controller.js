'use strict';

(function(){

class ConsultorioComponent {
  constructor() {
    this.message = 'Hello';
  }

  calcular(){


  	if (this.ct <= 0 ) {

  		this.total = "Lo sentimos pero debe digitar un numero mayo a 0 ";
  		console.log("sirve");
  	}

  	if (this.ct >= 1  && this.ct <= 3 ) {

  		this.total = 20000;
  		  		console.log("sirve", this.total ) ;

  	}



    if (this.ct >=4  && this.ct  <= 5) {
      this.total = 150000 + 60000 ;

    }

    if (this.ct  >= 6  && this.ct <= 8 ) {

      this.ct = 100000 + 45000 ;

    }

    if (this.ct >8 ) {

      this.ct = 50 + 800000;

    }




  	//debo sumarle  60000 de las seccioenes anterioeres

  }
}

angular.module('javascriptApp')
  .component('consultorio', {
    templateUrl: 'app/consultorio/consultorio.html',
    controller: ConsultorioComponent,
    controllerAs: 'vm'
  });

})();
