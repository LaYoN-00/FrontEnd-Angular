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
import { NumerosPrimosEjeciciosComponent } from './components-ejercicios/numeros-primos-ejecicios/numeros-primos-ejecicios.component';
import { CriteriosDivisibilidadEjeciciosComponent } from './components-ejercicios/criterios-divisibilidad-ejecicios/criterios-divisibilidad-ejecicios.component';
import { EcuacionesCuadraticasEjeciciosComponent } from './components-ejercicios/ecuaciones-cuadraticas-ejecicios/ecuaciones-cuadraticas-ejecicios.component';
import { TeoremaPitagorasEjeciciosComponent } from './components-ejercicios/teorema-pitagoras-ejecicios/teorema-pitagoras-ejecicios.component';
import { AlgebraEjeciciosComponent } from './components-ejercicios/algebra-ejecicios/algebra-ejecicios.component';
import { FuncionesEjeciciosComponent } from './components-ejercicios/funciones-ejecicios/funciones-ejecicios.component';
import { TrigonometriaEjeciciosComponent } from './components-ejercicios/trigonometria-ejecicios/trigonometria-ejecicios.component';
import { GeometriaEjeciciosComponent } from './components-ejercicios/geometria-ejecicios/geometria-ejecicios.component';
import { CalculoEjeciciosComponent } from './components-ejercicios/calculo-ejecicios/calculo-ejecicios.component';
import { RedesNeuronalesComponent } from './components/redes-neuronales/redes-neuronales.component';
import { ProfesoresPanelControlComponent } from './components-usuarios/profesores-panel-control/profesores-panel-control.component';
import { ProfesoresArbolDecisionComponent } from './components-usuarios/profesores-arbol-decision/profesores-arbol-decision.component';
import { ProfesoresSingUpComponent } from './components-usuarios/profesores-sing-up/profesores-sing-up.component';
import { ProfesoresActividadesComponent } from './components-usuarios/profesores-actividades/profesores-actividades.component';
import { ProfesoresActividadesAddEditActividadesComponent } from './components-usuarios/profesores-actividades-add-edit-actividades/profesores-actividades-add-edit-actividades.component';
import { AlumnosSingUpComponent } from './components-usuarios/alumnos-sing-up/alumnos-sing-up.component';
import { AlumnosPanelControlComponent } from './components-usuarios/alumnos-panel-control/alumnos-panel-control.component';
import { AlumnosClasesComponent } from './components-usuarios/alumnos-clases/alumnos-clases.component';
import { AlumnosActividadesComponent } from './components-usuarios/alumnos-actividades/alumnos-actividades.component';
import { AlumnosActividadesFormComponent } from './components-usuarios/alumnos-actividades-form/alumnos-actividades-form.component';
import { AlumnosListCalificacionesComponent } from './components-usuarios/alumnos-list-calificaciones/alumnos-list-calificaciones.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { GraficadoraComponent } from './components_extras/graficadora/graficadora.component';

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
    TrigonometriaTeoriaComponent,
    NumerosPrimosEjeciciosComponent,
    CriteriosDivisibilidadEjeciciosComponent,
    EcuacionesCuadraticasEjeciciosComponent,
    TeoremaPitagorasEjeciciosComponent,
    AlgebraEjeciciosComponent,
    FuncionesEjeciciosComponent,
    TrigonometriaEjeciciosComponent,
    GeometriaEjeciciosComponent,
    CalculoEjeciciosComponent,
    RedesNeuronalesComponent,
    ProfesoresPanelControlComponent,
    ProfesoresArbolDecisionComponent,
    ProfesoresSingUpComponent,
    ProfesoresActividadesComponent,
    ProfesoresActividadesAddEditActividadesComponent,
    AlumnosSingUpComponent,
    AlumnosPanelControlComponent,
    AlumnosClasesComponent,
    AlumnosActividadesComponent,
    AlumnosActividadesFormComponent,
    AlumnosListCalificacionesComponent,
    ProgressBarComponent,
    GraficadoraComponent,
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
