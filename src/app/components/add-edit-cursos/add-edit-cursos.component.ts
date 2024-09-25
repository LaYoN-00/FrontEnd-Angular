import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-add-edit-cursos',
  templateUrl: './add-edit-cursos.component.html',
  styleUrls: ['./add-edit-cursos.component.css']
})
export class AddEditCursosComponent {
  form: FormGroup;
  idCurso: Number;
  operacion: String = "AGREGAR"
  idProfesor:Number;

  constructor(private fb: FormBuilder,private _cursoService: CursoService,private router:Router,private aRouter:ActivatedRoute){
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
  }

  addCurso(){
    //console.log("CURSO AGREGADO")
    //console.log(this.form)
    const curso: Curso = {
      codigo: this.form.value.codigo,
      materia: this.form.value.nombre,
      creditos: this.form.value.creditos,
      profesor: this.form.value.profesor
    }

    if(this.idCurso!=0){
      console.log(curso)
      this._cursoService.updateCurso(this.idCurso,curso).subscribe((data:any)=>{
        console.log("Curso Actualizado")
        this.router.navigate(['/cursos/'+data.id]);
      })
    }
    else{
      console.log(curso)
      this._cursoService.saveCurso(curso).subscribe((data:any)=>{
        console.log("Curso Agregado")
        this.router.navigate(['/cursos/'+data.id]);
      })
    }
  }

  getCurso(idCurso:Number){
    this._cursoService.getCurso(idCurso).subscribe((data:Curso)=>{
      console.log(data)
      this.form.setValue({
        codigo: data.codigo,
        nombre: data.materia,
        creditos: data.creditos,
        profesor: data.profesor
      })
    })
  }

}
