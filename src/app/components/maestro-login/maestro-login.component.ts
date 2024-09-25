import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loggin } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-maestro-login',
  templateUrl: './maestro-login.component.html',
  styleUrls: ['./maestro-login.component.css']
})
export class MaestroLoginComponent {
  formLogin:FormGroup;
  constructor(private fb:FormBuilder,private _serviceUsuarios:UsuariosService,
    private router:Router){
    this.formLogin=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  Loggin(){
    const LogginMaestro:Loggin={
      username:this.formLogin.value.username,
      password:this.formLogin.value.password
    }
    this._serviceUsuarios.LogInMaestros(LogginMaestro).subscribe((data:any)=>{
      if(data.codigo==-1){
        console.log("MAESTRO NO LOGEADO")
        alert("Usuario o Contraseña INCORRECTA!");
      }
      else{
        this.router.navigate(['/panel-profesor/'+data.codigo]);
      }
    })
  }
}
