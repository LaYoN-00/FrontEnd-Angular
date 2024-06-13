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
  codigo: String;
  operacion: String = "AGREGAR "

  constructor(private fb: FormBuilder,private _cursoService: CursoService,private router:Router,private aRouter:ActivatedRoute){
    this.form=this.fb.group({
      codigo: ['',Validators.required],
      nombre: ['',Validators.required],
      creditos: ['',Validators.required],
    })
    this.codigo=String(aRouter.snapshot.paramMap.get('codigo'))
    console.log(this.codigo)
  }

  ngOnInit(): void{
    if(this.codigo!='null'){
      this.operacion='EDITAR '
      this.getCurso(this.codigo);
    }
  }

  addCurso(){
    //console.log("CURSO AGREGADO")
    //console.log(this.form)
    const curso: Curso = {
      codigo: this.form.value.codigo,
      nombre: this.form.value.nombre,
      creditos: this.form.value.creditos
    }

    const cursoActualizado: Curso={
      nombre: this.form.value.nombre,
      creditos: this.form.value.creditos
    }

    if(this.codigo!='null'){
      this._cursoService.updateCurso(this.codigo,cursoActualizado).subscribe(()=>{
        console.log("Curso Actualizado")
        this.router.navigate(['/']);
      })
    }
    else{
      console.log(curso)
      this._cursoService.saveCurso(curso).subscribe(()=>{
        console.log("Curso Agregado")
        this.router.navigate(['/']);
      })
    }
  }

  getCurso(codigo:String){
    this._cursoService.getCurso(codigo).subscribe((data:Curso)=>{
      console.log(data)
      this.form.setValue({
        codigo: data.codigo,
        nombre: data.nombre,
        creditos: data.creditos
      })
    })
  }

}
