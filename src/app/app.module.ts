import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NavbarComponent } from './components/navbar/navbar.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { AddEditCursosComponent } from './components/add-edit-cursos/add-edit-cursos.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ChatbotInterfazComponent } from './components/chatbot-interfaz/chatbot-interfaz.component';
import { AlumnoLoginComponent } from './components/alumno-login/alumno-login.component';
import { MaestroLoginComponent } from './components/maestro-login/maestro-login.component';
import { ListTemarioComponent } from './components/list-temario/list-temario.component';
import { NumerosPrimosTeoriaComponent } from './components-temas/numeros-primos-teoria/numeros-primos-teoria.component';
import { EcuacionesCuadraticasTeoriaComponent } from './components-temas/ecuaciones-cuadraticas-teoria/ecuaciones-cuadraticas-teoria.component';
import { FuncionesTeoriaComponent } from './components-temas/funciones-teoria/funciones-teoria.component';
import { CalculoTeoriaComponent } from './components-temas/calculo-teoria/calculo-teoria.component';
import { AlbegraTeoriaComponent } from './components-temas/albegra-teoria/albegra-teoria.component';
import { GeometriaTeoriaComponent } from './components-temas/geometria-teoria/geometria-teoria.component';
import { CriteriosDivisibilidadTeoriaComponent } from './components-temas/criterios-divisibilidad-teoria/criterios-divisibilidad-teoria.component';
import { TeoremaPitagorasTeoriaComponent } from './components-temas/teorema-pitagoras-teoria/teorema-pitagoras-teoria.component';
import { TrigonometriaTeoriaComponent } from './components-temas/trigonometria-teoria/trigonometria-teoria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCursosComponent,
    AddEditCursosComponent,
    PaginaPrincipalComponent,
    ChatbotInterfazComponent,
    AlumnoLoginComponent,
    MaestroLoginComponent,
    ListTemarioComponent,
    NumerosPrimosTeoriaComponent,
    EcuacionesCuadraticasTeoriaComponent,
    FuncionesTeoriaComponent,
    CalculoTeoriaComponent,
    AlbegraTeoriaComponent,
    GeometriaTeoriaComponent,
    CriteriosDivisibilidadTeoriaComponent,
    TeoremaPitagorasTeoriaComponent,
    TrigonometriaTeoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
