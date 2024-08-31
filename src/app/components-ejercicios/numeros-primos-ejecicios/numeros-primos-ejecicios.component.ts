import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-ejecicios',
  templateUrl: './numeros-primos-ejecicios.component.html',
  styleUrls: ['./numeros-primos-ejecicios.component.css']
})
export class NumerosPrimosEjeciciosComponent {
  numerosAleatorios: number[][] = [];
  mensajeCoordenada: string = 'No se ha seleccionado ningún número';
  color: string = '';
  textoDeInput: number = 0;

  imprimirEnConsola() {
    this.numerosAleatorios=[]
    console.log('Valor del input:', this.textoDeInput);
    this.llenarArreglo(this.textoDeInput);
  }
  
  mostrarMensaje(indiceFila: number, indiceColumna: number){
    //this.mensajeCoordenada = `El botón en la fila ${indiceFila} y columna ${indiceColumna} fue presionado.`;
    console.log(`El número ${this.numerosAleatorios[indiceFila][indiceColumna]} se encuentra en la fila ${indiceFila} y columna ${indiceColumna}.`);
    console.log(this.mensajeCoordenada);
    if(this.numeroPrimo(this.numerosAleatorios[indiceFila][indiceColumna])==false){
      this.color='red'
      this.mensajeCoordenada = String(this.numerosAleatorios[indiceFila][indiceColumna]) + ' NO ES UN NUMERO PRIMO';
    }
    else{
      this.color='green'
      this.mensajeCoordenada = String(this.numerosAleatorios[indiceFila][indiceColumna]) + ' ES UN NUMERO PRIMO';
    }
  }

  numeroPrimo(numero: number): boolean {
      if (numero <= 1) {
          return false;
      }
      for (let i = 2; i < numero; i++) {
          if (numero % i === 0) {
              return false;
          }
      }
      return true;
  }

  // Genera un número aleatorio entre 1 y 100
  generarNumeroAleatorio(){
    /* 
      Math.random(): Esta función devuelve un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo). Es decir, puede ser cualquier valor en el rango [0, 1).
      Math.floor(...): La función Math.floor() redondea hacia abajo al número entero más cercano. Al multiplicar el resultado de Math.random() por 100, obtendremos un número decimal entre 0 y 99.9999…
      + 1: Sumamos 1 al resultado anterior para obtener un número entre 1 y 100 (ambos inclusive).
    */
    return Math.floor(Math.random() * 100) + 1;
  }

  // Llena el arreglo con filas de 5 columnas
  llenarArreglo(cantidadFilas: number){
    for (let i = 0; i < cantidadFilas; i++) {
      const fila: number[] = [];
      for (let j = 0; j < 5; j++) {
        fila.push(this.generarNumeroAleatorio());
      }
      this.numerosAleatorios.push(fila);
    }
  }

}
