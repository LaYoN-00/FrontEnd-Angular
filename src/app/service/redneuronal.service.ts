import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/enviroment";
import { RedPeticion } from "../interfaces/interfaces";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class RedNeuronalService{
    private myAppUrl: string
    private myAppUrlV2: string
    private myAPIUrl: string

    constructor(private http:HttpClient){
        this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="api/redesneuronales";  
    }

    postRedPeticion(peticion:RedPeticion):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl,peticion);
    }

    postRedPeticionV2(peticion:RedPeticion):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl+'v2',peticion);
    }

}