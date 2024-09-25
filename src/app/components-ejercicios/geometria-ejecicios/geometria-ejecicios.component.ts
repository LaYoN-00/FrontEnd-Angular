import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-geometria-ejecicios',
  templateUrl: './geometria-ejecicios.component.html',
  styleUrls: ['./geometria-ejecicios.component.css']
})
export class GeometriaEjeciciosComponent {
  propiedad:string=''
  figura:string=''
  formula:string=''
  ladoA:number=0
  ladoB:number=0
  ladoC:number=0
  ladoD:number=0
  resultado:number=0
  public evaluacion: string = 'SIN RESPUESTA';
  public ejercicio: string = '';
  public lados: string = '';
  form: FormGroup;
  formRespuesta: FormGroup;
  fechaActual:any;
  tiempo=0;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      opcionA:[''],
      opcionB:[''],
      opcionC:[''],
      opcionD:[''],
    })
    this.formRespuesta=this.fb.group({
      respuesta:['',Validators.required]
    })
  }

  getEjercicio(){
    this.getPropiedad()
    this.getFigura(this.propiedad)
    this.ejercicio='El Ejercicio es: Sacar '+this.propiedad+' de la Figura '+this.figura+' con la Formula '+this.formula
    this.lados='LADO A = '+this.ladoA+' LADO B = '+this.ladoB+' LADO C = '+this.ladoC+' LADO D = '+this.ladoD
    this.form.setValue({
      opcionA:'Primera Variable '+this.ladoA,
      opcionB:'Segunda Variable '+this.ladoB,
      opcionC:'Tercera Variable '+this.ladoC,
      opcionD:'Cuarta Variable '+this.ladoD,
    })
    this.getFechaActual()
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getPropiedad(){
    const NumeroPropiedad=this.getRandomInt(1,4)
    switch(NumeroPropiedad){
      case 1:
        this.propiedad='perimetro'
      break;
      case 2:
        this.propiedad='area'
      break;
      case 3:
        this.propiedad='volumen'
      break;
      case 4:
        this.propiedad='area de la superficie'
      break;
    }
  }

  getFigura(propiedad:string){
    const Formula=this.getRandomInt(1,4)
    const Formulav2=this.getRandomInt(1,5)
    switch(propiedad){
      case 'perimetro':
        this.getFiguraPerimetro(Formula)
      break;
      case 'area':
        this.getFiguraArea(Formula)
      break;
      case 'volumen':
        this.getFiguraVolumen(Formulav2)
      break;
      case 'area de la superficie':
        this.getFiguraVolumenArea(Formulav2)
      break;
    }
  }

  getFiguraPerimetro(figura:number){
    switch(figura){
      case 1:
        this.figura='Cuadrado'
        this.formula='P=4a (donde (a) es la longitud del lado)'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=4*this.ladoA
      break;
      case 2:
        this.figura='Rectángulo'
        this.formula='P=2(l+w) (donde (l) es la longitud y (w) es el ancho)'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.resultado=2*(this.ladoA+this.ladoB)
      break;
      case 3:
        this.figura='Triángulo'
        this.formula='P=a+b+c (donde (a), (b) y (c) son las longitudes de los lados)'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.ladoC=this.getRandomInt(1,10)
        this.resultado=this.ladoA+this.ladoB+this.ladoC
      break;
      case 4:
        this.figura='Círculo'
        this.formula='C=2πr (donde (r) es el radio)'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=Math.round((2*Math.PI*this.ladoA) * 100) / 100;
      break;
    }
  }

  getFiguraArea(figura:number){
    switch(figura){
      case 1:
        this.figura='Cuadrado'
        this.formula='A=a^2 (donde (a) es la longitud del lado)'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=this.ladoA*this.ladoA
      break;
      case 2:
        this.figura='Rectángulo'
        this.formula='Rectángulo: A=lw (donde (l) es la longitud y (w) es el ancho)'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.resultado=this.ladoA*this.ladoB
      break;
      case 3:
        this.figura='Triángulo'
        this.formula='A=(b*h)/2 (donde (b) es la base y (h) es la altura)'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.resultado=(this.ladoA*this.ladoB)/2
      break;
      case 4:
        this.figura='Círculo'
        this.formula='A=πr^2 (donde (r) es el radio)'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=Math.round((Math.PI*(this.ladoA*this.ladoA)) * 100) / 100;
      break;
    }
  }

  getFiguraVolumen(figura:number){
    switch(figura){
      case 1:
        this.figura='Cubo'
        this.formula='V=a^3 (donde (a) es la longitud del lado)'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=this.ladoA*this.ladoA*this.ladoA
      break;
      case 2:
        this.figura='Prisma Rectangular'
        this.formula='V=lwh (donde (l) es la longitud , (w) es el ancho) , (h) es la profundidad'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.ladoC=this.getRandomInt(1,10)
        this.resultado=2*(this.ladoA*this.ladoB*this.ladoC)
      break;
      case 3:
        this.figura='Cilindro: '
        this.formula='V=π*r^2*h'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.resultado=Math.round((Math.PI*(this.ladoA*this.ladoA)*this.ladoB) * 100) / 100;
      break;
      case 4:
        this.figura='Esfera'
        this.formula='V=(4/3)*π*r^3'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=Math.round(((4/3)*Math.PI*(this.ladoA*this.ladoA*this.ladoA)) * 100) / 100;
      break;
      case 5:
        this.figura='Cono'
        this.formula='V=(1/3)*π*r^2*h'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.resultado=Math.round(((Math.PI*(this.ladoA*this.ladoA)*this.ladoB)/3) * 100) / 100;
      break;
    }
  }

  getFiguraVolumenArea(figura:number){
    switch(figura){
      case 1:
        this.figura='Cubo'
        this.formula='A=6*a^2 (donde (a) es la longitud del lado)'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=6*(this.ladoA*this.ladoA)
      break;
      case 2:
        this.figura='Prisma Rectangular'
        this.formula='A=2(l*w+l*h+w*h) (donde (l) es la longitud , (w) es el ancho) , (h) es la profundidad'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.ladoC=this.getRandomInt(1,10)
        this.resultado=2*(this.ladoA*(this.ladoB+this.ladoA)*(this.ladoC+this.ladoB)*this.ladoC)
      break;
      case 3:
        this.figura='Cilindro: '
        this.formula='A=2*π*r*(h+r)'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.resultado=Math.round((2*Math.PI*(this.ladoA)*(this.ladoB+this.ladoA)) * 100) / 100;
      break;
      case 4:
        this.figura='Esfera'
        this.formula='A=4*π*r^2'
        this.ladoA=this.getRandomInt(1,10)
        this.resultado=Math.round(((4)*Math.PI*(this.ladoA*this.ladoA)) * 100) / 100;
      break;
      case 5:
        this.figura='Cono'
        this.formula='A=π*r*(r+raiz<h^2+r^2>)'
        this.ladoA=this.getRandomInt(1,10)
        this.ladoB=this.getRandomInt(1,10)
        this.resultado=Math.round((Math.PI*this.ladoA*(this.ladoA+Math.sqrt((this.ladoB*this.ladoB)+(this.ladoA*this.ladoA)))) * 100) / 100;
      break;
    }
  }

  getEvaluacion(){
    if(this.formRespuesta.value.respuesta==this.resultado){
      this.evaluacion='CORRECTO'
      const nuevaFecha = new Date();
      const diferenciaMilisegundos = nuevaFecha.getTime() - this.fechaActual.getTime();
      const diferenciaMinutos = diferenciaMilisegundos / (1000 * 60);
      const minutosEnteros = Math.floor(diferenciaMinutos); // O Math.round(diferenciaMinutos)
      this.tiempo = minutosEnteros;
      alert(`Han pasado ${minutosEnteros} minutos.`);
    }
    else{
      this.evaluacion='INCORRECTO'
    }
  }
  getFechaActual(){
    // Simulamos una nueva hora registrada (por ejemplo, 2 horas y 30 minutos después)
    this.fechaActual = new Date();
    console.log(this.fechaActual)
  }
}
