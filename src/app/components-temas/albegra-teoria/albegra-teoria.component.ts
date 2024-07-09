import { Component } from '@angular/core';

@Component({
  selector: 'app-albegra-teoria',
  templateUrl: './albegra-teoria.component.html',
  styleUrls: ['./albegra-teoria.component.css']
})
export class AlbegraTeoriaComponent {
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
  mostrarContenidov10 = false;
  mostrarContenidov11 = false;
  mostrarContenidov12 = false;
  mostrarContenidov13 = false;
  mostrarContenidov14 = false;
  mostrarContenidov15 = false;
  mostrarContenidov16 = false;
  mostrarContenidov17 = false;
  mostrarContenidov18 = false;
  mostrarContenidov19 = false;
  mostrarContenidov20 = false;
  mostrarContenidov21 = false;
  mostrarContenidov22 = false;
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
      case 10:
        this.mostrarContenidov10 = !this.mostrarContenidov10;
        break;
      case 11:
        this.mostrarContenidov11 = !this.mostrarContenidov11;
        break;
      case 12:
        this.mostrarContenidov12 = !this.mostrarContenidov12;
        break;
      case 13:
        this.mostrarContenidov13 = !this.mostrarContenidov13;
        break;
      case 14:
        this.mostrarContenidov14 = !this.mostrarContenidov14;
        break;
      case 15:
        this.mostrarContenidov15 = !this.mostrarContenidov15;
        break;
      case 16:
        this.mostrarContenidov16 = !this.mostrarContenidov16;
        break;
      case 17:
        this.mostrarContenidov17 = !this.mostrarContenidov17;
        break;
      case 18:
        this.mostrarContenidov18 = !this.mostrarContenidov18;
        break;
      case 19:
        this.mostrarContenidov19 = !this.mostrarContenidov19;
        break;
      case 20:
        this.mostrarContenidov20 = !this.mostrarContenidov20;
        break;
      case 21:
        this.mostrarContenidov21 = !this.mostrarContenidov21;
        break;
      case 22:
        this.mostrarContenidov22 = !this.mostrarContenidov22;
        break;
    }
  }
}
