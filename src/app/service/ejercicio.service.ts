import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/enviroment";
import { Ejercicio, EjercicioAlgebra, EjercicioDerividaras, EjercicioEcuacionesCuadraticas, EjercicioFunciones, EjercicioTeoremaPitagoras, EjercicioTrigonometria } from "../interfaces/ejercicios";

@Injectable({
    providedIn:'root'
})

export class EjercicioService{
    private myAppUrlV2: string
    private myAppUrl: string
    private myAPIUrl: string

    constructor(private http:HttpClient){
        this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="api/ejercicios/";
    }

    getEjericio():Observable<Ejercicio[]>{
        return this.http.get<Ejercicio[]>(this.myAppUrlV2+this.myAPIUrl+'/criterios')
    }

    getEjercicioEcuacionesCuadraticas():Observable<EjercicioEcuacionesCuadraticas[]>{
        return this.http.get<EjercicioEcuacionesCuadraticas[]>(this.myAppUrlV2+this.myAPIUrl+'/ecuaciones_cuadraticas')
    }

    getEjerciciosTeoremaPitagoras():Observable<EjercicioTeoremaPitagoras[]>{
        return this.http.get<EjercicioTeoremaPitagoras[]>(this.myAppUrlV2+this.myAPIUrl+'/teorema_pitagoras')
    }

    getEjerciciosAlgebra():Observable<EjercicioAlgebra[]>{
        return this.http.get<EjercicioAlgebra[]>(this.myAppUrlV2+this.myAPIUrl+'/algebra')
    }

    getEjerciciosFunciones():Observable<EjercicioFunciones[]>{
        return this.http.get<EjercicioFunciones[]>(this.myAppUrlV2+this.myAPIUrl+'/funciones')
    }

    getEjerciciosTrigonometria():Observable<EjercicioTrigonometria[]>{
        return this.http.get<EjercicioTrigonometria[]>(this.myAppUrlV2+this.myAPIUrl+'/trigonometria')
    }

    getEjerciciosDerivadas():Observable<EjercicioDerividaras[]>{
        return this.http.get<EjercicioDerividaras[]>(this.myAppUrlV2+this.myAPIUrl+'/calculo')
    }
}