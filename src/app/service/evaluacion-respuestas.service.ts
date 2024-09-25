import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/enviroment";
import { EnvioRespuestas } from "../interfaces/respuestas";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class EvaluarRespuestaService{
    private myAppUrl: string
    private myAppUrlV2: string
    private myAPIUrl: string

    constructor(private http:HttpClient){
        this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="/api/ejercicios/E_respuestas/";
    }
    
    postRespuestaCriterios(respuesta:EnvioRespuestas):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'criterios',respuesta)
    }

    postRespuestaEcuaciones(respuesta:EnvioRespuestas):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'ecuaciones_cuadraticas',respuesta)
    }

    postRespuestaTeorema(respuesta:EnvioRespuestas):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'teorema_pitagoras',respuesta)
    }

    postRespuestaAlgebra(respuesta:EnvioRespuestas):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'algebra',respuesta)
    }

    postRespuestaFunciones(respuesta:EnvioRespuestas):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'funciones',respuesta)
    }

    postRespuestaTrigonometria(respuesta:EnvioRespuestas):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'trigonometria',respuesta)
    }

    postRespuestaDerivadas(respuesta:EnvioRespuestas):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'derivadas',respuesta)
    }
}