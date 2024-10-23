import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArbolDecisionData } from 'src/app/interfaces/interfaces';
import { ArbolDecisionService } from 'src/app/service/arboldecision.service';

@Component({
  selector: 'app-profesores-arbol-decision',
  templateUrl: './profesores-arbol-decision.component.html',
  styleUrls: ['./profesores-arbol-decision.component.css']
})
export class ProfesoresArbolDecisionComponent {
  profesor:number
  prediccion_1:string=''
  prediccion_2:string=''
  prediccion_3:string=''
  precision:number=0
  mensaje:string=''
  constructor(private aRouter:ActivatedRoute,private fb:FormBuilder,private _ArbolService:ArbolDecisionService){
    this.profesor=Number(this.aRouter.snapshot.paramMap.get('idprofesor'))
  }

  ngOnInit():void{
    this.setDatos();
  }
  
  setDatos(){
    this._ArbolService.getDataArbolDecision(this.profesor).subscribe((data:ArbolDecisionData)=>{
      this.prediccion_1=data.prediccion_1,
      this.prediccion_2=data.prediccion_2,
      this.prediccion_3=data.prediccion_3,
      this.precision=data.precision,
      this.mensaje=data.mensaje;   
    })
  }
}
