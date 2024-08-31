import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ejercicio } from 'src/app/interfaces/ejercicios';
import { EnvioRespuestas, OpcionesRespuestas } from 'src/app/interfaces/respuestas';
import { EjercicioService } from 'src/app/service/ejercicio.service';
import { EvaluarRespuestaService } from 'src/app/service/evaluacion-respuestas.service';
import { RespuestaService } from 'src/app/service/respuestas.service';

@Component({
  selector: 'app-criterios-divisibilidad-ejecicios',
  templateUrl: './criterios-divisibilidad-ejecicios.component.html',
  styleUrls: ['./criterios-divisibilidad-ejecicios.component.css']
})
export class CriteriosDivisibilidadEjeciciosComponent {
  ListEjercicios: Ejercicio[]=[]
  IDrespuesta: number=0
  form: FormGroup;
  formRespuesta: FormGroup;
  public resultado: string = 'SIN RESPUESTA';

  constructor(private _ejercicioService: EjercicioService,private _respuestaService:RespuestaService,
    private fb:FormBuilder,private _enviarRespuestas:EvaluarRespuestaService){
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
  ngOnInit(){
    const switchElement = document.getElementById("flexSwitchCheckChecked") as HTMLInputElement;
    switchElement.addEventListener("change", (event: Event) => {
      if (switchElement.checked) {
        console.log("Encendido");
      } else {
        console.log("Apagado");
      }
    });
  }
  
  getEjercicio(){
    this._ejercicioService.getEjericio().subscribe((data: Ejercicio[])=>{
      this.ListEjercicios=data
      this.IDrespuesta=this.ListEjercicios[0].id
      this.getOpcionesRespuestas(this.IDrespuesta)
    });
  }

  getOpcionesRespuestas(IDejercicio:number){
    this._respuestaService.getOpcionesRespuestasCriterios(IDejercicio).subscribe((data2:OpcionesRespuestas)=>{
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
    this._enviarRespuestas.postRespuestaCriterios(enviarRespuesta).subscribe((data3:any)=>{
      this.resultado=data3.respuesta
    })
  }

}
