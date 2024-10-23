import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-profesores-panel-control',
  templateUrl: './profesores-panel-control.component.html',
  styleUrls: ['./profesores-panel-control.component.css']
})
export class ProfesoresPanelControlComponent {
  public IDprofesor:number;
  constructor(private aRouter:ActivatedRoute,private _UsuariosService:UsuariosService,private router:Router){
    this.IDprofesor=Number(aRouter.snapshot.paramMap.get('idprofesor'))
  }
  ngOnInit():void{
    this._UsuariosService.ConfirmacionMaestros(this.IDprofesor).subscribe((data:any)=>{
      if(data.confirmacion=='False'){
        this.router.navigate(['/#']);
      }
    })
  }
}
