import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EjercicioEcuacionesCuadraticas } from 'src/app/interfaces/ejercicios';
import { EnvioRespuestas, OpcionesRespuestas } from 'src/app/interfaces/respuestas';
import { EjercicioService } from 'src/app/service/ejercicio.service';
import { EvaluarRespuestaService } from 'src/app/service/evaluacion-respuestas.service';
import { RespuestaService } from 'src/app/service/respuestas.service';

@Component({
  selector: 'app-ecuaciones-cuadraticas-ejecicios',
  templateUrl: './ecuaciones-cuadraticas-ejecicios.component.html',
  styleUrls: ['./ecuaciones-cuadraticas-ejecicios.component.css']
})
export class EcuacionesCuadraticasEjeciciosComponent {
  ListEjercicios: EjercicioEcuacionesCuadraticas[]=[];
  IDrespuesta: number=0;
  form: FormGroup;
  formRespuesta: FormGroup;
  public resultado: string = 'SIN RESPUESTA';
  fechaActual:any;
  tiempo=0;

  constructor(private _ejercicioService: EjercicioService,private _respuestaService:RespuestaService,
    private fb:FormBuilder,private _enviarRespuestas:EvaluarRespuestaService
  ){
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
    this._ejercicioService.getEjercicioEcuacionesCuadraticas().subscribe((data: EjercicioEcuacionesCuadraticas[])=>{
      this.ListEjercicios=data
      this.IDrespuesta=this.ListEjercicios[0].id
      this.getOpcionesRespuestas(this.IDrespuesta)
    });
    this.getFechaActual()
  }

  getOpcionesRespuestas(IDejercicio:number){
    this._respuestaService.getOpcionesRespuestasEcuaciones(IDejercicio).subscribe((data2:OpcionesRespuestas)=>{
      this.form.setValue({
        opcionA:data2.opcion_a,
        opcionB:data2.opcion_b,
        opcionC:data2.opcion_c,
        opcionD:data2.opcion_d,
      })
    })
  }

  getEvaluacion(){
    const enviarRespuesta:EnvioRespuestas={
      id:this.IDrespuesta,
      respuesta:this.formRespuesta.value.respuesta
    }
    this._enviarRespuestas.postRespuestaEcuaciones(enviarRespuesta).subscribe((data3:any)=>{
      this.resultado=data3.respuesta
      if(this.resultado='CORRECTA'){
        const nuevaFecha = new Date();
        const diferenciaMilisegundos = nuevaFecha.getTime() - this.fechaActual.getTime();
        const diferenciaMinutos = diferenciaMilisegundos / (1000 * 60);
        const minutosEnteros = Math.floor(diferenciaMinutos); // O Math.round(diferenciaMinutos)
        this.tiempo = minutosEnteros;
        alert(`Han pasado ${minutosEnteros} minutos.`);
      }
    })
  }
  getFechaActual(){
    // Simulamos una nueva hora registrada (por ejemplo, 2 horas y 30 minutos después)
    this.fechaActual = new Date();
    console.log(this.fechaActual)
  }
}
