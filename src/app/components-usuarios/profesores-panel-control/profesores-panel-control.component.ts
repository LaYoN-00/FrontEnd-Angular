import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesores-panel-control',
  templateUrl: './profesores-panel-control.component.html',
  styleUrls: ['./profesores-panel-control.component.css']
})
export class ProfesoresPanelControlComponent {
  public IDprofesor:number;
  constructor(private aRouter:ActivatedRoute){
    this.IDprofesor=Number(aRouter.snapshot.paramMap.get('idprofesor'))
    console.log(this.IDprofesor)
  }
}
