import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      respuesta:['']
    })
  }
  
  getEjercicio(){
    this._ejercicioService.getEjercicioEcuacionesCuadraticas().subscribe((data: EjercicioEcuacionesCuadraticas[])=>{
      this.ListEjercicios=data
      this.IDrespuesta=this.ListEjercicios[0].id
      this.getOpcionesRespuestas(this.IDrespuesta)
    });
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
    })
  }

}
