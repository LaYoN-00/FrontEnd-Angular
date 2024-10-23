import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calificaciones } from 'src/app/interfaces/interfaces';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-alumnos-list-calificaciones',
  templateUrl: './alumnos-list-calificaciones.component.html',
  styleUrls: ['./alumnos-list-calificaciones.component.css']
})
export class AlumnosListCalificacionesComponent {
  ListCalificaciones:Calificaciones[]=[];
  idAlumnos:number;
  constructor(private aRouter:ActivatedRoute,private _usuarioService:UsuariosService){
    this.idAlumnos=Number(aRouter.snapshot.paramMap.get('alumno'))
  }
  ngOnInit():void{
    this.getListCalificaciones();
  }
  getListCalificaciones(){
    this._usuarioService.ListarCalificacionesUsuarios(this.idAlumnos).subscribe((data:Calificaciones[])=>{
      this.ListCalificaciones=data
    })
  }
}
