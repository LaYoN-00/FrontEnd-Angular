import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorActividades } from 'src/app/interfaces/actividades';
import { ActividadesService } from 'src/app/service/actividades.service';

@Component({
  selector: 'app-profesores-actividades',
  templateUrl: './profesores-actividades.component.html',
  styleUrls: ['./profesores-actividades.component.css']
})
export class ProfesoresActividadesComponent {
  listActividades: ProfesorActividades[]=[]
  IDprofesor:number
  constructor(private _actividadService:ActividadesService,private aRouter:ActivatedRoute){
    this.IDprofesor=Number(aRouter.snapshot.paramMap.get('idprofesor'))
    console.log(this.IDprofesor)
  }
  ngOnInit():void{
    this.GetListActividades();
  }
  GetListActividades(){
      this._actividadService.getListarActividadesProfesores(this.IDprofesor).subscribe((data:ProfesorActividades[])=>{
        this.listActividades=data
      });
  }
}
