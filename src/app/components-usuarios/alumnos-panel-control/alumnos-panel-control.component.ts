import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos-panel-control',
  templateUrl: './alumnos-panel-control.component.html',
  styleUrls: ['./alumnos-panel-control.component.css']
})
export class AlumnosPanelControlComponent {
  idAlumno:number;
  constructor(private aRouter:ActivatedRoute){
    this.idAlumno=Number(aRouter.snapshot.paramMap.get('idalumno'))
    console.log(this.idAlumno)
  }
}
