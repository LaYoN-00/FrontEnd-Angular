import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/enviroment";
import { AlumnosActividades, AlumnosActividadesForm, AlumnosActividadesRespuestasForm, AlumnosActualizarCalificacion, ProfesorActividadAlta, ProfesorActividades } from "../interfaces/actividades";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ActividadesService{
  //private myAppUrl: string
  private myAppUrlV2: string
  private myAPIUrl: string
  private myAPIUrlv2: string
  
  constructor(private http:HttpClient){
    //this.myAppUrl=environment.endpoint;
    this.myAppUrlV2=environment.endpointPythonAnyWhere;
    this.myAPIUrl="api/actividad/";
    this.myAPIUrlv2="api/alumnos/actividad/";
    //http://127.0.0.1:5000/api/actividad/alta
  }
  
  getListarActividadesProfesores(id:number):Observable<ProfesorActividades[]>{
    return this.http.get<ProfesorActividades[]>(this.myAppUrlV2+this.myAPIUrl+'listar/'+id);
  }

  postActividades(actividad:ProfesorActividadAlta):Observable<void>{
    return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'alta',actividad)
  }

  getListarActividadesAlumnos(id:number):Observable<AlumnosActividades[]>{
    return this.http.get<AlumnosActividades[]>(this.myAppUrlV2+this.myAPIUrlv2+'listar/'+id)
  }

  getSetActividadesAlumnos(codigo:number,actividad:string):Observable<AlumnosActividadesForm>{
    return this.http.get<AlumnosActividadesForm>(this.myAppUrlV2+this.myAPIUrlv2+'realizar/'+codigo+'/'+actividad)
  }

  postEnviarRespuestasAlumnos(idActividad:number,respuestas:AlumnosActividadesRespuestasForm):Observable<void>{
    return this.http.post<void>(this.myAppUrlV2+this.myAPIUrlv2+'enviar/'+idActividad,respuestas)
  }

  putEvaluarRespuestasAlumnos(alumno:number,clase:number,calificacion:number,actividad:AlumnosActualizarCalificacion):Observable<void>{
    return this.http.put<void>(this.myAppUrlV2+this.myAPIUrlv2+'actualizar/'+alumno+'/'+clase+'/'+calificacion,actividad)
  }
}