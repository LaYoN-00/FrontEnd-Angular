import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EjercicioAlgebra } from 'src/app/interfaces/ejercicios';
import { EnvioRespuestas, OpcionesRespuestas } from 'src/app/interfaces/respuestas';
import { EjercicioService } from 'src/app/service/ejercicio.service';
import { EvaluarRespuestaService } from 'src/app/service/evaluacion-respuestas.service';
import { RespuestaService } from 'src/app/service/respuestas.service';

@Component({
  selector: 'app-algebra-ejecicios',
  templateUrl: './algebra-ejecicios.component.html',
  styleUrls: ['./algebra-ejecicios.component.css']
})
export class AlgebraEjeciciosComponent {
  ListEjercicios: EjercicioAlgebra[]=[];
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
    this._ejercicioService.getEjerciciosAlgebra().subscribe((data: EjercicioAlgebra[])=>{
      this.ListEjercicios=data
      this.IDrespuesta=this.ListEjercicios[0].id
      this.getOpcionesRespuestas(this.IDrespuesta)
    });
  }

  getOpcionesRespuestas(IDejercicio:number){
    this._respuestaService.getOpcionesRespuestasAlgebra(IDejercicio).subscribe((data2:OpcionesRespuestas)=>{
      console.log(data2)
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
    this._enviarRespuestas.postRespuestaAlgebra(enviarRespuesta).subscribe((data3:any)=>{
      this.resultado=data3.respuesta
    })
  }
}