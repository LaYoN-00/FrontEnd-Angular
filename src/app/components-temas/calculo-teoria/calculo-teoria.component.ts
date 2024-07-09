import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-teoria',
  templateUrl: './calculo-teoria.component.html',
  styleUrls: ['./calculo-teoria.component.css']
})
export class CalculoTeoriaComponent {
// En tu componente
mostrarContenido = false;
mostrarContenidov2 = false;
mostrarContenidov3 = false;
mostrarContenidov4 = false;
mostrarContenidov5 = false;
mostrarContenidov6 = false;
mostrarContenidov7 = false;
mostrarContenidov8 = false;
mostrarContenidov9 = false;
seccion=0;

MostrarParrafo(seccion:number){
  switch(seccion){
    case 1:
      this.mostrarContenido = !this.mostrarContenido;
      break;
    case 2:
      this.mostrarContenidov2 = !this.mostrarContenidov2;
      break;
    case 3:
      this.mostrarContenidov3 = !this.mostrarContenidov3;
      break;
    case 4:
      this.mostrarContenidov4 = !this.mostrarContenidov4;
      break;
    case 5:
      this.mostrarContenidov5 = !this.mostrarContenidov5;
      break;
    case 6:
      this.mostrarContenidov6 = !this.mostrarContenidov6;
      break;
    case 7:
      this.mostrarContenidov7 = !this.mostrarContenidov7;
      break;
    case 8:
      this.mostrarContenidov8 = !this.mostrarContenidov8;
      break;
    case 9:
      this.mostrarContenidov9 = !this.mostrarContenidov9;
      break;
  }
}
}
