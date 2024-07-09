import { Component } from '@angular/core';

@Component({
  selector: 'app-ecuaciones-cuadraticas-teoria',
  templateUrl: './ecuaciones-cuadraticas-teoria.component.html',
  styleUrls: ['./ecuaciones-cuadraticas-teoria.component.css']
})
export class EcuacionesCuadraticasTeoriaComponent {
  // En tu componente
  mostrarContenido = false;
  mostrarContenidov2 = false;
  mostrarContenidov3 = false;
  mostrarContenidov4 = false;
  mostrarContenidov5 = false;
  mostrarContenidov6 = false;
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
    }
  }
}
