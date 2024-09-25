import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActividadesService } from 'src/app/service/actividades.service';
import { ProfesorActividadAlta, ProfesorActividades } from "src/app/interfaces/actividades";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores-actividades-add-edit-actividades',
  templateUrl: './profesores-actividades-add-edit-actividades.component.html',
  styleUrls: ['./profesores-actividades-add-edit-actividades.component.css']
})
export class ProfesoresActividadesAddEditActividadesComponent {
  formActividades:FormGroup;
  operacion:String='AGREGAR';
  constructor(private fb:FormBuilder,private _actividadService:ActividadesService,private router:Router){
    this.formActividades=this.fb.group({
      profesor: ['',Validators.required],
      clase: ['',Validators.required],
      Newactividad: ['',Validators.required],
      inciso1: ['',Validators.required],
      inciso2: ['',Validators.required],
      inciso3: ['',Validators.required],
      inciso4: ['',Validators.required],
      inciso5: ['',Validators.required],
      inciso6: ['',Validators.required],
      inciso7: ['',Validators.required],
      inciso8: ['',Validators.required],
      inciso9: ['',Validators.required],
      inciso10: ['',Validators.required],
      respuesta1: ['',Validators.required],
      respuesta2: ['',Validators.required],
      respuesta3: ['',Validators.required],
      respuesta4: ['',Validators.required],
      respuesta5: ['',Validators.required],
      respuesta6: ['',Validators.required],
      respuesta7: ['',Validators.required],
      respuesta8: ['',Validators.required],
      respuesta9: ['',Validators.required],
      respuesta10: ['',Validators.required],
    })
  }

  addActividades(){
    const newActividad:ProfesorActividadAlta={
      profesor:this.formActividades.value.profesor,
      clase:this.formActividades.value.clase,
      actividad:this.formActividades.value.Newactividad,
      inciso1:this.formActividades.value.inciso1,
      inciso2:this.formActividades.value.inciso2,
      inciso3:this.formActividades.value.inciso3,
      inciso4:this.formActividades.value.inciso4,
      inciso5:this.formActividades.value.inciso5,
      inciso6:this.formActividades.value.inciso6,
      inciso7:this.formActividades.value.inciso7,
      inciso8:this.formActividades.value.inciso8,
      inciso9:this.formActividades.value.inciso9,
      inciso10:this.formActividades.value.inciso10,
      respuesta1:this.formActividades.value.respuesta1,
      respuesta2:this.formActividades.value.respuesta2,
      respuesta3:this.formActividades.value.respuesta3,
      respuesta4:this.formActividades.value.respuesta4,
      respuesta5:this.formActividades.value.respuesta5,
      respuesta6:this.formActividades.value.respuesta6,
      respuesta7:this.formActividades.value.respuesta7,
      respuesta8:this.formActividades.value.respuesta8,
      respuesta9:this.formActividades.value.respuesta9,
      respuesta10:this.formActividades.value.respuesta10,
    }
    this._actividadService.postActividades(newActividad).subscribe((data:any)=>{
      console.log("Actividad Agregada")
      this.router.navigate(['/profesor-actividades/'+data.id]);
    })
  }
}
