import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profesores } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-profesores-sing-up',
  templateUrl: './profesores-sing-up.component.html',
  styleUrls: ['./profesores-sing-up.component.css']
})
export class ProfesoresSingUpComponent {
  formProfesores:FormGroup;
  constructor(private fb:FormBuilder,private _serviceUsuarios:UsuariosService,
    private router:Router){
    this.formProfesores=this.fb.group({
      //nombre:['',Validators.required], 
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      username:['',Validators.required], 
      password:['',Validators.required],
    })
  }
  SaveNewProfesor(){
    const profesor: Profesores={
      nombre:this.formProfesores.value.nombre,
      username:this.formProfesores.value.username,
      password:this.formProfesores.value.password
    }
    this._serviceUsuarios.SingUpMaestros(profesor).subscribe(()=>{
      this.router.navigate(['/profesores-login']);
    })
  }
}
