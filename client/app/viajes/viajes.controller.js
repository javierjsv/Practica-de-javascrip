'use strict';

(function(){

class ViajesComponent {
  constructor() {
    this.message = 'Hello';
  }

  calcular(){

    if (this.np >= 20 ) {

         this.total = (this.bus * this.km * this.np ) ;

         console.log("pasajeros mayor a 20 " , + this. total );
    }

    if (this.np <= 19 ) {

      

       this.total = (this.bus * this.km * 20 ) ;
       console.log("pasajeros  menor a 19 ", this.total );



    }


  	

  }
}

angular.module('javascriptApp')
  .component('viajes', {
    templateUrl: 'app/viajes/viajes.html',
    controller: ViajesComponent,
    controllerAs: 'vm'
  });

})();
