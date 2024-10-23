import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent {
  ListCursosV2: Curso[] = []
  public IDprofesor:number;
  constructor(private _cursosService: CursoService,private aRouter:ActivatedRoute,private router:Router,){
    this.IDprofesor=Number(aRouter.snapshot.paramMap.get('idprofesor'))
  }

  ngOnInit(): void{
    this.getListCursos();
  }

  getListCursos() {
    this._cursosService.getListCursos(this.IDprofesor).subscribe((data: Curso[]) => {
      this.ListCursosV2 = data
    });
  }

  deleteCurso(codigo:any){
    var eliminarCodigo=Number(codigo)
    this._cursosService.deleteCursos(eliminarCodigo).subscribe((data:any)=>{
      this.getListCursos();
    });
  }
}
