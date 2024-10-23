import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlumnosActividadesForm, AlumnosActividadesRespuestasForm, AlumnosActualizarCalificacion } from 'src/app/interfaces/actividades';
import { ActividadesService } from 'src/app/service/actividades.service';

@Component({
  selector: 'app-alumnos-actividades-form',
  templateUrl: './alumnos-actividades-form.component.html',
  styleUrls: ['./alumnos-actividades-form.component.css']
})
export class AlumnosActividadesFormComponent {
  fechaActual = new Date();
  tiempo=0;
  alumno:number;
  clase:number;
  actividad:string;
  idActividad=0;
  aciertos=0;
  formPreguntas:FormGroup;
  formRespuestas:FormGroup;
  constructor(private aRouter:ActivatedRoute,private fb:FormBuilder,private _ActividadesService:ActividadesService){
    this.alumno=Number(aRouter.snapshot.paramMap.get('alumno'))
    this.clase=Number(aRouter.snapshot.paramMap.get('clase'))
    this.actividad=String(aRouter.snapshot.paramMap.get('actividad'))
    this.formPreguntas=this.fb.group({
      pregunta1:['',Validators.required],
      pregunta2:['',Validators.required],
      pregunta3:['',Validators.required],
      pregunta4:['',Validators.required],
      pregunta5:['',Validators.required],
      pregunta6:['',Validators.required],
      pregunta7:['',Validators.required],
      pregunta8:['',Validators.required],
      pregunta9:['',Validators.required],
      pregunta10:['',Validators.required],
    })
    this.formRespuestas=this.fb.group({
      respuesta1:['',Validators.required],
      respuesta2:['',Validators.required],
      respuesta3:['',Validators.required],
      respuesta4:['',Validators.required],
      respuesta5:['',Validators.required],
      respuesta6:['',Validators.required],
      respuesta7:['',Validators.required],
      respuesta8:['',Validators.required],
      respuesta9:['',Validators.required],
      respuesta10:['',Validators.required],
    })
  }
  ngOnInit():void{
    this.SetFormPreguntasInit()
  }
  SetFormPreguntasInit(){
    this._ActividadesService.getSetActividadesAlumnos(this.clase,this.actividad).subscribe((data:AlumnosActividadesForm)=>{
      this.formPreguntas.setValue({
        pregunta1:data.inciso_1,
        pregunta2:data.inciso_2,
        pregunta3:data.inciso_3,
        pregunta4:data.inciso_4,
        pregunta5:data.inciso_5,
        pregunta6:data.inciso_6,
        pregunta7:data.inciso_7,
        pregunta8:data.inciso_8,
        pregunta9:data.inciso_9,
        pregunta10:data.inciso_10,
      })
      this.idActividad=data.id_actividad
    })
  }
  EnviarRespuestas(){
    const respuestas:AlumnosActividadesRespuestasForm={
      respuesta1:this.formRespuestas.value.respuesta1,
      respuesta2:this.formRespuestas.value.respuesta2,
      respuesta3:this.formRespuestas.value.respuesta3,
      respuesta4:this.formRespuestas.value.respuesta4,
      respuesta5:this.formRespuestas.value.respuesta5,
      respuesta6:this.formRespuestas.value.respuesta6,
      respuesta7:this.formRespuestas.value.respuesta7,
      respuesta8:this.formRespuestas.value.respuesta8,
      respuesta9:this.formRespuestas.value.respuesta9,
      respuesta10:this.formRespuestas.value.respuesta10
    }

    this._ActividadesService.postEnviarRespuestasAlumnos(this.idActividad,respuestas).subscribe((data:any)=>{
      this.aciertos=data.TotalAciertos
      
      const newCalificacion:AlumnosActualizarCalificacion={
        id_actividad:this.idActividad,
        id_clase:this.clase,	
        calificacion:this.aciertos,
        tiempo:this.tiempo
      }
      this._ActividadesService.putEvaluarRespuestasAlumnosV2(this.alumno,newCalificacion).subscribe((data:any)=>{
        alert("TIEMPO DE ACTIVIDAD:"+this.tiempo+'\n'+data.mensaje);
      })
    })

    this.ObtenerMinutos(this.fechaActual)
  }

  ObtenerMinutos(fechaActual:any){
    // Simulamos una nueva hora registrada (por ejemplo, 2 horas y 30 minutos después)
    const nuevaFecha = new Date();

    // Calculamos la diferencia en milisegundos
    const diferenciaMilisegundos = nuevaFecha.getTime() - fechaActual.getTime();

    // Convertimos la diferencia a minutos
    const diferenciaMinutos = diferenciaMilisegundos / (1000 * 60);

    // Redondeamos la diferencia a minutos enteros
    const minutosEnteros = Math.floor(diferenciaMinutos); // O Math.round(diferenciaMinutos)

    this.tiempo = minutosEnteros;

    console.log(`Han pasado ${minutosEnteros} minutos.`);
  }
}
