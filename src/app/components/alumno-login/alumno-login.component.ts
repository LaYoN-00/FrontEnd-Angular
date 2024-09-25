import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loggin } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-alumno-login',
  templateUrl: './alumno-login.component.html',
  styleUrls: ['./alumno-login.component.css']
})
export class AlumnoLoginComponent {
  formLogin:FormGroup;
  
  constructor(private fb:FormBuilder,private _usuariosService:UsuariosService,
    private router:Router){
      this.formLogin=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      })
    }
  
  Loggin(){
    const LogginAlumno:Loggin={
      username:this.formLogin.value.username,
      password:this.formLogin.value.password
    }
    this._usuariosService.LogInAlumnos(LogginAlumno).subscribe((data:any)=>{
      if(data.codigo==-1){
        console.log("ALUMNO NO LOGEADO")
        alert("Usuario o Contraseña INCORRECTA!");
      }
      else{
        this.router.navigate(['/panel-alumnos/'+data.codigo]);
      }
    })
  }
}
