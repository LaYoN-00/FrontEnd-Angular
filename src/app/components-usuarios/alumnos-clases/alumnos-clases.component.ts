import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso, CursoMatricula } from 'src/app/interfaces/curso';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-alumnos-clases',
  templateUrl: './alumnos-clases.component.html',
  styleUrls: ['./alumnos-clases.component.css']
})
export class AlumnosClasesComponent {
  ListCurso:Curso[]=[];
  IDalumno:number;
  constructor(private _UsuariosService:UsuariosService,private aRouter:ActivatedRoute){
    this.IDalumno=Number(aRouter.snapshot.paramMap.get('idalumno'))
  }
  ngOnInit(): void{
    this.getListCursos();
  }
  getListCursos(){
    this._UsuariosService.ListarCursoAlumnos().subscribe((data:Curso[])=>{
      this.ListCurso=data
    })
  }
  addMatricula(idCurso:number){
    const matricula:CursoMatricula={
      idcurso:idCurso,
      idalumno:this.IDalumno
    }
    this._UsuariosService.MatricularAlumno(matricula).subscribe((data:any)=>{
      
    })
  }
}
