import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-teoria',
  templateUrl: './numeros-primos-teoria.component.html',
  styleUrls: ['./numeros-primos-teoria.component.css']
})
export class NumerosPrimosTeoriaComponent {
  // En tu componente
  mostrarContenido = false;
  mostrarContenidov2 = false;
  mostrarContenidov3 = false;
  mostrarContenidov3_1 = false;
  mostrarContenidov3_2 = false;
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
        this.mostrarContenidov3_1 = !this.mostrarContenidov3_1;
        break;
      case 5:
        this.mostrarContenidov3_2 = !this.mostrarContenidov3_2;
        break;
    }
  }

}
