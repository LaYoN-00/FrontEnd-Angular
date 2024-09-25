import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/enviroment";
import { Alumnos, Loggin, Profesores } from "../interfaces/usuarios";
import { Observable } from "rxjs";
import { Curso, CursoMatricula } from "../interfaces/curso";
import { Calificaciones } from "../interfaces/interfaces";

@Injectable({
    providedIn:'root',
})

export class UsuariosService{
    //private myAppUrl: string
    private myAppUrlV2: string
    private myAPIUrl: string
    private myAPIUrlV2: string
    
    constructor(private http:HttpClient){
        //this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="api/maestros/";
        this.myAPIUrlV2="api/alumnos/";
    }

    SingUpMaestros(maestro:Profesores):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'alta',maestro)
    }

    LogInMaestros(loggin:Loggin):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'loggin',loggin)
    }

    SingUpAlumnos(alumno:Alumnos):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrlV2+'alta',alumno)
    }

    LogInAlumnos(loggin:Loggin):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrlV2+'loggin',loggin)
    }

    ListarCursoAlumnos():Observable<Curso[]>{
        return this.http.get<Curso[]>(this.myAppUrlV2+this.myAPIUrlV2+'curso/listar')
    }

    MatricularAlumno(matricula:CursoMatricula):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrlV2+'curso/alta',matricula)
    }

    //http://127.0.0.1:5000/api/alumnos/calificaciones/2
    ListarCalificacionesUsuarios(alumno:number):Observable<Calificaciones[]>{
        return this.http.get<Calificaciones[]>(this.myAppUrlV2+this.myAPIUrlV2+'/calificaciones/'+alumno)
    }

}