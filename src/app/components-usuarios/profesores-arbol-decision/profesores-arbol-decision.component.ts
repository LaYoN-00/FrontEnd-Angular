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
  formDataArbolDecision:FormGroup;
  profesor:number
  constructor(private aRouter:ActivatedRoute,private fb:FormBuilder,private _ArbolService:ArbolDecisionService){
    this.profesor=Number(this.aRouter.snapshot.paramMap.get('idprofesor'))
    this.formDataArbolDecision=this.fb.group({
      prediccion_1:[''],
      prediccion_2:[''],
      prediccion_3:[''],
      precision:[''],
      mensaje:['']
    })
    this.formDataArbolDecision.disable()
  }

  ngOnInit():void{
    this.setDatos();
  }
  
  setDatos(){
    this._ArbolService.getDataArbolDecision(this.profesor).subscribe((data:ArbolDecisionData)=>{
      this.formDataArbolDecision.setValue({
        prediccion_1:data.prediccion_1,
        prediccion_2:data.prediccion_2,
        prediccion_3:data.prediccion_3,
        precision:data.precision,
        mensaje:data.mensaje,
      })
    })
  }
}
