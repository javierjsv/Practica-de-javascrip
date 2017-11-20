'use strict';

(function(){

class SueldoComponent {
  constructor() {
    this.message = 'Hello';
  }

  sueldo(){
this.ss = this.ht * this.ph;
console.log(this.ss);


  }
}

angular.module('javascriptApp')
  .component('sueldo', {
    templateUrl: 'app/sueldo/sueldo.html',
    controller: SueldoComponent,
    controllerAs: 'vm'
  });

})();
