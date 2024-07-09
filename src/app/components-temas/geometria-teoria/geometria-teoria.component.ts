import { Component } from '@angular/core';

@Component({
  selector: 'app-geometria-teoria',
  templateUrl: './geometria-teoria.component.html',
  styleUrls: ['./geometria-teoria.component.css']
})
export class GeometriaTeoriaComponent {
// En tu componente
mostrarContenido = false;
mostrarContenidov2 = false;
mostrarContenidov3 = false;
mostrarContenidov4 = false;
mostrarContenidov5 = false;
mostrarContenidov6 = false;
mostrarContenidov7 = false;
mostrarContenidov8 = false;
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
  }
}
}
