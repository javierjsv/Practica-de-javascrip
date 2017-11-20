'use strict';

(function(){

class MayorComponent {
  constructor() {
    this.message = 'Hello';
    this.m = 0;
  }

  calcular(){
  	if (this.a > this.b && this.b > this.c ) {

  		this.m =  this.a ;
  	}

      if (this.a < this.b && this.b < this.c ) {

      this.m =  this.c ;
    }

      if (this.a < this.b && this.b > this.c ) {

      this.m =  this.b ;
    }

    if (this.a > this.b  && this.a < this.c) {
      this.m = this.c ;
    }

    if (this.a < this.b && this.b > this.c) {
      this.m = this.b
    }

  }
}

angular.module('javascriptApp')
  .component('mayor', {
    templateUrl: 'app/mayor/mayor.html',
    controller: MayorComponent,
    controllerAs: 'vm'
  });

})();
