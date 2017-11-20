'use strict';

(function(){

class PlanocarteseanoComponent {
  constructor() {

  }
hallarP(){
this.x = this.x2 - this.x1;
this.y = this.y2 - this.y1;
this.a = Math.pow(this.x,2)+ Math.pow(this.y,2);
this.b = Math.sqrt(this.a);


}

}

angular.module('javascriptApp')
  .component('planocarteseano', {
    templateUrl: 'app/planocarteseano/planocarteseano.html',
    controller: PlanocarteseanoComponent,
    controllerAs: 'vm'
  });

})();
