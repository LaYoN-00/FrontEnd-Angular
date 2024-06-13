import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private myAppUrl: string
  private myAppUrlV2: string
  private myAPIUrl: string

  constructor(private http:HttpClient) { 
    this.myAppUrl=environment.endpoint;
    this.myAppUrlV2=environment.endpointPythonAnyWhere;
    this.myAPIUrl="api/cursos/";
  }

  getListCursos(): Observable<Curso[]>{
    //return this.http.get<Curso[]>(this.myAppUrl+this.myAPIUrl+'listar')
    return this.http.get<Curso[]>(this.myAppUrlV2+this.myAPIUrl+'listar');
  }

  deleteCursos(codigo:String):Observable<void>{
    return this.http.delete<void>(this.myAppUrlV2+this.myAPIUrl+'eliminar/'+codigo)
  }

  saveCurso(curso:Curso):Observable<void>{
    return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'alta',curso)
  }

  getCurso(codigo:String):Observable<Curso>{
    return this.http.get<Curso>(this.myAppUrlV2+this.myAPIUrl+'buscar/'+codigo)
  }

  updateCurso(codigo:String,curso:Curso):Observable<void>{
    return this.http.put<void>(this.myAppUrlV2+this.myAPIUrl+'actualizar/'+codigo,curso)
  }

}
