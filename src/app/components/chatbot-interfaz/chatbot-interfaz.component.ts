import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chat } from 'src/app/interfaces/interfaces';
import { ChatbotService } from 'src/app/service/chatbot.service';

@Component({
  selector: 'app-chatbot-interfaz',
  templateUrl: './chatbot-interfaz.component.html',
  styleUrls: ['./chatbot-interfaz.component.css']
})
export class ChatbotInterfazComponent {
  form: FormGroup;
  peticiones: string[] = [];
  mostrarContenido = false;
  loading:boolean=false;

  constructor(private fb: FormBuilder,private _chatService:ChatbotService){
    this.form=this.fb.group({
      peticion:['',Validators.required]
    })
  }

  enviarMensaje(){
    const valorPeticion = this.form.get('peticion')?.value;
    this.recibirRespuesta()
    if (valorPeticion) {
      this.peticiones.push(valorPeticion);
      // Limpia el campo de entrada después de agregarlo al arreglo
      this.form.get('peticion')?.reset();
    }
  }

  MostrarParrafo(){
    this.mostrarContenido = !this.mostrarContenido;
  }

  recibirRespuesta(){
    this.loading=true
    const mensaje: Chat={
      peticion: this.form.value.peticion
    }
    // En tu componente
    this._chatService.enviarMensaje(mensaje).subscribe(
      (response: any) => {
        const mensaje = response["Bot: "]; // Accede a la propiedad "Bot: "
        this.peticiones.push(mensaje);
        this.loading=false
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
