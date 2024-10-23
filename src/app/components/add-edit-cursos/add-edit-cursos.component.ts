import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { CursoService } from 'src/app/service/curso.service';
import { UsuariosService } from 'src/app/service/usurios.service';

@Component({
  selector: 'app-add-edit-cursos',
  templateUrl: './add-edit-cursos.component.html',
  styleUrls: ['./add-edit-cursos.component.css']
})
export class AddEditCursosComponent {
  form: FormGroup;
  idCurso: Number;
  operacion: String = "AGREGAR"
  idProfesor:number;

  constructor(private fb: FormBuilder,private _cursoService: CursoService,private router:Router,
    private aRouter:ActivatedRoute,private _UsuariosService:UsuariosService){
    this.form=this.fb.group({
      codigo: ['',Validators.required],
      nombre: ['',Validators.required],
      creditos: ['',Validators.required],
      profesor: ['',Validators.required],
    })
    this.idCurso=Number(aRouter.snapshot.paramMap.get('codigo'))
    this.idProfesor=Number(aRouter.snapshot.paramMap.get('profesor'))
  }

  ngOnInit(): void{
    if(this.idCurso!=0){
      this.operacion='EDITAR'
      this.getCurso(this.idCurso);
    }
    this._UsuariosService.ConfirmacionMaestros(this.idProfesor).subscribe((data:any)=>{
      if(data.confirmacion=='False'){
        this.router.navigate(['/#']);
      }
      this.form.setValue({
        codigo: "",
        nombre: "",
        creditos: "",
        profesor: data.confirmacion
      })
    })
  }

  addCurso(){
    const curso: Curso = {
      codigo: this.form.value.codigo,
      materia: this.form.value.nombre,
      creditos: this.form.value.creditos,
      profesor: this.form.value.profesor
    }

    if(this.idCurso!=0){
      this._cursoService.updateCurso(this.idCurso,curso).subscribe((data:any)=>{
        this.router.navigate(['/cursos/'+data.id]);
      })
    }
    else{
      console.log(curso)
      this._cursoService.saveCurso(curso).subscribe((data:any)=>{
        this.router.navigate(['/cursos/'+data.id]);
      })
    }
  }

  getCurso(idCurso:Number){
    this._cursoService.getCurso(idCurso).subscribe((data:Curso)=>{
      this.form.setValue({
        codigo: data.codigo,
        nombre: data.materia,
        creditos: data.creditos,
        profesor: data.profesor
      })
    })
  }
}