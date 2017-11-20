'use strict';
(function(){

class TriNgulosComponent {
  constructor() {
    this.pi = 3.1416;
  }

  retangulo(){
    this.c = Math.sqrt(Math.pow(this.h,2)-Math.pow(this.r,2));
    this.at = 2*(this.r*this.c)/2;
    this.ac = (this.pi*this.r*this.r)/2;
    this.area2 = this.at+this.ac;
  }
}

angular.module('javascriptApp')
  .component('triangulos', {
    templateUrl: 'app/triangulos/triangulos.html',
    controller: TriNgulosComponent,
    controllerAs:'vm'
  });

})();
