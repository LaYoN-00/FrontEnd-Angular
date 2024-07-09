import { Component } from '@angular/core';

@Component({
  selector: 'app-criterios-divisibilidad-teoria',
  templateUrl: './criterios-divisibilidad-teoria.component.html',
  styleUrls: ['./criterios-divisibilidad-teoria.component.css']
})
export class CriteriosDivisibilidadTeoriaComponent {

  // En tu componente
  mostrarContenido = false;
  mostrarContenidov2 = false;
  mostrarContenidov3 = false;
  mostrarContenidov4 = false;
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
    }
  }

}
