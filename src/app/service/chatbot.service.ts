import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { Chat } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {
    private myAppUrl: string
    private myAppUrlV2: string
    private myAPIUrl: string

    constructor(private http:HttpClient) {
        this.myAppUrl=environment.endpoint;
        this.myAppUrlV2=environment.endpointPythonAnyWhere;
        this.myAPIUrl="api/chatbot";
        
    }

    enviarMensaje(peticion:Chat):Observable<void>{
        return this.http.post<void>(this.myAppUrlV2+this.myAPIUrl,peticion)
    }
}