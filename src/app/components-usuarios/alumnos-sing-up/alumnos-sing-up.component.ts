import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumnos } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-alumnos-sing-up',
  templateUrl: './alumnos-sing-up.component.html',
  styleUrls: ['./alumnos-sing-up.component.css']
})
export class AlumnosSingUpComponent {
  formAlumnos:FormGroup;
  
  constructor(private fb:FormBuilder,private _serviceUsuarios:UsuariosService,
    private router:Router){
    this.formAlumnos=this.fb.group({
      nombre:['',Validators.required], 
      username:['',Validators.required], 
      password:['',Validators.required],
    })
  }

  SaveNewAlumno(){
    const alumno:Alumnos={
      nombre:this.formAlumnos.value.nombre,
      username:this.formAlumnos.value.username,
      password:this.formAlumnos.value.password
    }
    this._serviceUsuarios.SingUpAlumnos(alumno).subscribe(()=>{
      this.router.navigate(['/alumnos-login']);
    })
  }
}
