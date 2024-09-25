import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private _cursosService: CursoService,private aRouter:ActivatedRoute){
    this.IDprofesor=Number(aRouter.snapshot.paramMap.get('idprofesor'))
  }

  ngOnInit(): void{
    this.getListCursos();
  }

  getListCursos() {
    this._cursosService.getListCursos(this.IDprofesor).subscribe((data: Curso[]) => {
      // Convierte el objeto a un iterable (array)
      this.ListCursosV2 = data
      console.log(this.ListCursosV2)
    });
  }

  deleteCurso(codigo:any){
    console.log(codigo)
  }

}
