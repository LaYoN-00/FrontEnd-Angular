import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedPeticion } from 'src/app/interfaces/interfaces';
import { RedNeuronalService } from 'src/app/service/redneuronal.service';

@Component({
  selector: 'app-redes-neuronales',
  templateUrl: './redes-neuronales.component.html',
  styleUrls: ['./redes-neuronales.component.css']
})

export class RedesNeuronalesComponent {
  formPeticionRed: FormGroup;
  public resultado: any=null;
  
  constructor(private fb:FormBuilder,private _ServiceRed:RedNeuronalService){
    this.formPeticionRed=this.fb.group({
      "coeficiente":['',Validators.required],
      "variableA":['',Validators.required],
      "variableB":['',Validators.required],
    })
  }

  SendPeticionRed(){
    const peticion: RedPeticion={
      coeficiente:this.formPeticionRed.value.coeficiente,
      variableA:this.formPeticionRed.value.variableA,
      variableB:this.formPeticionRed.value.variableB
    }
    this._ServiceRed.postRedPeticion(peticion).subscribe((data:any)=>{
      this.resultado=data.prediccion
    })
  }
}

