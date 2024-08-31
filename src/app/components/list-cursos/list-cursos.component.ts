import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent {
  ListCursosV2: Curso[] = []


  constructor(private _cursosService: CursoService){

  }

  ngOnInit(): void{
    this.getListCursos();
  }

  getListCursos() {
    this._cursosService.getListCursos().subscribe((data: Curso[]) => {
      // Convierte el objeto a un iterable (array)
      this.ListCursosV2 = data
      console.log(this.ListCursosV2)
    });
  }

  deleteCurso(codigo:String){
    this._cursosService.deleteCursos(codigo).subscribe(data => {
      console.log(data)
      this.getListCursos();
    })
  }

}
