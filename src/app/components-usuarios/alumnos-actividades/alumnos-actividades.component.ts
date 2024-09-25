import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosActividades } from 'src/app/interfaces/actividades';
import { ActividadesService } from 'src/app/service/actividades.service';

@Component({
  selector: 'app-alumnos-actividades',
  templateUrl: './alumnos-actividades.component.html',
  styleUrls: ['./alumnos-actividades.component.css']
})
export class AlumnosActividadesComponent {
  ListActividades:AlumnosActividades[]=[];
  IDalumno:number;
  constructor(private aRouter:ActivatedRoute,private _actividadesService:ActividadesService){
    this.IDalumno=Number(aRouter.snapshot.paramMap.get('idalumno'))
  }
  ngOnInit():void{
    this.getActividades();
  }
  getActividades(){
    this._actividadesService.getListarActividadesAlumnos(this.IDalumno).subscribe((data:AlumnosActividades[])=>{
      this.ListActividades=data;
      console.log(this.ListActividades)
    })
  }
  RealizarActividad(Clase:string,actividad:string){
    console.log(Clase)
    console.log(actividad)
  }
}
