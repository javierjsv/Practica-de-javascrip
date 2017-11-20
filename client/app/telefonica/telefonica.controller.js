'use strict';

(function(){

class TelefonicaComponent {
  constructor() {
   // this.ti = 0 ;
  }

  calcular(){

  console.log("TI... ",this.ti);

    // Primera condicion

  	if (this.ti > 1 && this.ti <= 5) {
  		this.pag =  100 ;

  		if (this.jornada == 0 ) {

         this.x = (this.ti * 100);
         this.y = this.x * 0.03 ;
         this.total = this.x + this.y ;


        console.log("sirve",this.total);
  		
  		}

  		if (this.jornada == 1) {
  			

        this.x = (this.ti * 80) ;
        console.log("x" ,this.x);
         this.y = this.x * 0.15 ;
         console.log("y" ,this.y);
         this.total = this.x + this.y ;
         console.log("total",this.total)


        console.log("sirve",this.total);
      

  		}

  		if (this.jornada == 2) {

  			 this.x = (this.ti * 100) ;
         console.log("x" ,this.x);
         this.y = this.x * 0.10 ;
         console.log("y" ,this.y);
         this.total = this.x + this.y ;
         console.log("total",this.total)
  		}

  	}



    // Segunda condicion


  	if (this.ti >= 6 && this.ti <= 7) {
        this.pag =  80 ;


        if (this.jornada == 0) {

           this.x = this.ti - 5 ;
           this.y = this.x * 80 ;
           this.z = 5 * 100 ;
           this.total = this.y + this.z ;


        }




        if (this.jornada == 1) {

           this.x = this.ti - 5 ;
           this.y = this.x * 80 ;
           this.z = 5 * 100 ;
           this.total = this.y + this.z ;


        }
  	
     

  	




  	}

  	if (this.ti >= 8 && this.ti <=9) {

  		this.pag = 70 ;

  		if (this.jornada == 0 ) {

  			this.total = this.pag + (this.pag * 0.03) ;
  			console.log("domigp",this.total)
  		}

  		if (this.jornada == 1) {
  			this.total = this.pag + (this.pag * 0.15) ;
  		}

  		if (this.jornada == 2) {

  			this.total = this.pag + (this.pag * 0.10) ;
  		}
  	}

  	if (this.ti >= 10 ) {
  		this.pag = 50;
  		if (this.jornada == 0 ) {

  			this.total = this.pag + (this.pag * 0.03) ;
  			console.log("domigp",this.total)
  		}

  		if (this.jornada == 1) {
  			this.total = this.pag + (this.pag * 0.15) ;
  		}

  		if (this.jornada == 2) {

  			this.total = this.pag + (this.pag * 0.10) ;
  		}
  	}
  		

  }
}

angular.module('javascriptApp')
  .component('telefonica', {
    templateUrl: 'app/telefonica/telefonica.html',
    controller: TelefonicaComponent,
    controllerAs: 'vm'
  });

})();
