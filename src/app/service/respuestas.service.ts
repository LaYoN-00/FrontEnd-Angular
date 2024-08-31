import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/enviroment";
import { OpcionesRespuestas } from "../interfaces/respuestas";

@Injectable({
    providedIn:'root'
})

export class RespuestaService{
    private myAppUrl: string
    private myAppUrlV2: string
    private myAPIUrl: string

    constructor(private http:HttpClient){
        this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="/api/ejercicios/G_respuestas/";
    }

    getOpcionesRespuestasCriterios(ejercicio:number):Observable<OpcionesRespuestas>{
        return this.http.get<OpcionesRespuestas>(this.myAppUrl+this.myAPIUrl+'criterios/'+ejercicio)
    }

    getOpcionesRespuestasEcuaciones(ejercicio:number):Observable<OpcionesRespuestas>{
        return this.http.get<OpcionesRespuestas>(this.myAppUrl+this.myAPIUrl+'ecuaciones_cuadraticas/'+ejercicio)
    }

    getOpcionesRespuestasTeoremas(ejercicio:number):Observable<OpcionesRespuestas>{
        return this.http.get<OpcionesRespuestas>(this.myAppUrl+this.myAPIUrl+'teorema_pitagoras/'+ejercicio)
    }

    getOpcionesRespuestasAlgebra(ejercicio:number):Observable<OpcionesRespuestas>{
        return this.http.get<OpcionesRespuestas>(this.myAppUrl+this.myAPIUrl+'algebra/'+ejercicio)
    }

    getOpcionesRespuestasFunciones(ejercicio:number):Observable<OpcionesRespuestas>{
        return this.http.get<OpcionesRespuestas>(this.myAppUrl+this.myAPIUrl+'funciones/'+ejercicio)
    }

    getOpcionesRespuestasTrigonometria(ejercicio:number):Observable<OpcionesRespuestas>{
        return this.http.get<OpcionesRespuestas>(this.myAppUrl+this.myAPIUrl+'trigonometria/'+ejercicio)
    }

    getOpcionesRespuestasDerivadas(ejercicio:number):Observable<OpcionesRespuestas>{
        return this.http.get<OpcionesRespuestas>(this.myAppUrl+this.myAPIUrl+'derivadas/'+ejercicio)
    }
}