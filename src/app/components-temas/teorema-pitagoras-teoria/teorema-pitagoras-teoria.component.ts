import { Component } from '@angular/core';

@Component({
  selector: 'app-teorema-pitagoras-teoria',
  templateUrl: './teorema-pitagoras-teoria.component.html',
  styleUrls: ['./teorema-pitagoras-teoria.component.css']
})
export class TeoremaPitagorasTeoriaComponent {
// En tu componente
mostrarContenido = false;
mostrarContenidov2 = false;
mostrarContenidov3 = false;
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
  }
}
}
