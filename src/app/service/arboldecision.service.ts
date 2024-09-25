import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/enviroment";
import { ArbolDecisionData } from "../interfaces/interfaces";

@Injectable({
    providedIn:'root'
})

export class ArbolDecisionService{
    private myAppUrl: string
    private myAppUrlV2: string
    private myAPIUrl: string

    constructor(private http:HttpClient){
        this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="api/profesor/arbol-decision/";
    }

    getDataArbolDecision(profesor:number):Observable<ArbolDecisionData>{
        return this.http.get<ArbolDecisionData>(this.myAppUrlV2+this.myAPIUrl+profesor)
    }
}

