'use strict';
(function(){

class PromedioComponent {
  constructor() {
    this.CalificacionP = 0;
  }

  calificaion(){
    this.calificacionP = (this.Ca1 + this.Ca2 + this.Ca3 + this.Ca4)/4;
    this.sumPromedio = this.Ca1 + this.Ca2 + this.Ca3 + this.Ca4;
    console.log("Promedio");
  }
}

angular.module('javascriptApp')
  .component('promedio', {
    templateUrl: 'app/promedio/promedio.html',
    controller: PromedioComponent,
    controllerAs:'vm'
  });

})();
