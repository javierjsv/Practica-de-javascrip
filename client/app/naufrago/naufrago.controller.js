'use strict';

(function(){

class NaufragoComponent {
  constructor() {
    this.ph = 0 ;
  }


  calcular(){

  	  	console.log("Sirve");

  	this.total = this.ph * this.ct ;

  	if (this.fp == 1) {

  	  this.total =  (parseInt(this.ph) +	(parseInt(this.ph) * 0.05) ) * this.ct ;
  	}


  }
}

angular.module('javascriptApp')
  .component('naufrago', {
    templateUrl: 'app/naufrago/naufrago.html',
    controller: NaufragoComponent,
    controllerAs: 'vm'
  });

})();
