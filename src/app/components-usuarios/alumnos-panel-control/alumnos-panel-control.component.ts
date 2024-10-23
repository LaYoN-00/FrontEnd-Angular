import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-alumnos-panel-control',
  templateUrl: './alumnos-panel-control.component.html',
  styleUrls: ['./alumnos-panel-control.component.css']
})
export class AlumnosPanelControlComponent {
  idAlumno:number;
  constructor(private aRouter:ActivatedRoute,private _UsuariosService:UsuariosService,private router:Router){
    this.idAlumno=Number(aRouter.snapshot.paramMap.get('idalumno'))
  }
  ngOnInit():void{
    this._UsuariosService.ConfirmacionAlumnos(this.idAlumno).subscribe((data:any)=>{
      if(data.confirmacion=='False'){
        this.router.navigate(['/#']);
      }
    })
  }
}
