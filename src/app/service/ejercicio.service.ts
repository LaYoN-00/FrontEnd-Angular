import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/enviroment";
import { Ejercicio, EjercicioAlgebra, EjercicioDerividaras, EjercicioEcuacionesCuadraticas, EjercicioFunciones, EjercicioTeoremaPitagoras, EjercicioTrigonometria } from "../interfaces/ejercicios";

@Injectable({
    providedIn:'root'
})

export class EjercicioService{
    private myAppUrl: string
    private myAppUrlV2: string
    private myAPIUrl: string

    constructor(private http:HttpClient){
        this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="api/ejercicios/";
    }

    getEjericio():Observable<Ejercicio[]>{
        return this.http.get<Ejercicio[]>(this.myAppUrl+this.myAPIUrl+'/criterios')
    }

    getEjercicioEcuacionesCuadraticas():Observable<EjercicioEcuacionesCuadraticas[]>{
        return this.http.get<EjercicioEcuacionesCuadraticas[]>(this.myAppUrl+this.myAPIUrl+'/ecuaciones_cuadraticas')
    }

    getEjerciciosTeoremaPitagoras():Observable<EjercicioTeoremaPitagoras[]>{
        return this.http.get<EjercicioTeoremaPitagoras[]>(this.myAppUrl+this.myAPIUrl+'/teorema_pitagoras')
    }

    getEjerciciosAlgebra():Observable<EjercicioAlgebra[]>{
        return this.http.get<EjercicioAlgebra[]>(this.myAppUrl+this.myAPIUrl+'/algebra')
    }

    getEjerciciosFunciones():Observable<EjercicioFunciones[]>{
        return this.http.get<EjercicioFunciones[]>(this.myAppUrl+this.myAPIUrl+'/funciones')
    }

    getEjerciciosTrigonometria():Observable<EjercicioTrigonometria[]>{
        return this.http.get<EjercicioTrigonometria[]>(this.myAppUrl+this.myAPIUrl+'/trigonometria')
    }

    getEjerciciosDerivadas():Observable<EjercicioDerividaras[]>{
        return this.http.get<EjercicioDerividaras[]>(this.myAppUrl+this.myAPIUrl+'/calculo')
    }
}