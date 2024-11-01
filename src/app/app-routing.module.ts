import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/// COMPONENTES
import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { ListCursosComponent } from "./components/list-cursos/list-cursos.component";
import { AddEditCursosComponent } from "./components/add-edit-cursos/add-edit-cursos.component";
import { MaestroLoginComponent } from "./components/maestro-login/maestro-login.component";
import { AlumnoLoginComponent } from "./components/alumno-login/alumno-login.component";
import { ChatbotInterfazComponent } from "./components/chatbot-interfaz/chatbot-interfaz.component";
import { ListTemarioComponent } from "./components/list-temario/list-temario.component";
import { NumerosPrimosTeoriaComponent } from "./components-temas/numeros-primos-teoria/numeros-primos-teoria.component";
import { EcuacionesCuadraticasTeoriaComponent } from "./components-temas/ecuaciones-cuadraticas-teoria/ecuaciones-cuadraticas-teoria.component";
import { FuncionesTeoriaComponent } from "./components-temas/funciones-teoria/funciones-teoria.component";
import { CalculoTeoriaComponent } from "./components-temas/calculo-teoria/calculo-teoria.component";
import { AlbegraTeoriaComponent } from "./components-temas/albegra-teoria/albegra-teoria.component";
import { GeometriaTeoriaComponent } from "./components-temas/geometria-teoria/geometria-teoria.component";
import { CriteriosDivisibilidadTeoriaComponent } from "./components-temas/criterios-divisibilidad-teoria/criterios-divisibilidad-teoria.component";
import { TeoremaPitagorasTeoriaComponent } from "./components-temas/teorema-pitagoras-teoria/teorema-pitagoras-teoria.component";
import { TrigonometriaTeoriaComponent } from "./components-temas/trigonometria-teoria/trigonometria-teoria.component";
import { NumerosPrimosEjeciciosComponent } from "./components-ejercicios/numeros-primos-ejecicios/numeros-primos-ejecicios.component";
import { CriteriosDivisibilidadEjeciciosComponent } from "./components-ejercicios/criterios-divisibilidad-ejecicios/criterios-divisibilidad-ejecicios.component";
import { EcuacionesCuadraticasEjeciciosComponent } from "./components-ejercicios/ecuaciones-cuadraticas-ejecicios/ecuaciones-cuadraticas-ejecicios.component";
import { TeoremaPitagorasEjeciciosComponent } from "./components-ejercicios/teorema-pitagoras-ejecicios/teorema-pitagoras-ejecicios.component";
import { AlgebraEjeciciosComponent } from "./components-ejercicios/algebra-ejecicios/algebra-ejecicios.component";
import { FuncionesEjeciciosComponent } from "./components-ejercicios/funciones-ejecicios/funciones-ejecicios.component";
import { TrigonometriaEjeciciosComponent } from "./components-ejercicios/trigonometria-ejecicios/trigonometria-ejecicios.component";
import { GeometriaEjeciciosComponent } from "./components-ejercicios/geometria-ejecicios/geometria-ejecicios.component";
import { CalculoEjeciciosComponent } from "./components-ejercicios/calculo-ejecicios/calculo-ejecicios.component";
import { RedesNeuronalesComponent } from "./components/redes-neuronales/redes-neuronales.component";
import { ProfesoresPanelControlComponent } from "./components-usuarios/profesores-panel-control/profesores-panel-control.component";
import { ProfesoresArbolDecisionComponent } from "./components-usuarios/profesores-arbol-decision/profesores-arbol-decision.component";
import { ProfesoresSingUpComponent } from "./components-usuarios/profesores-sing-up/profesores-sing-up.component";
import { ProfesoresActividadesComponent } from "./components-usuarios/profesores-actividades/profesores-actividades.component";
import { ProfesoresActividadesAddEditActividadesComponent } from "./components-usuarios/profesores-actividades-add-edit-actividades/profesores-actividades-add-edit-actividades.component";
import { AlumnosSingUpComponent } from "./components-usuarios/alumnos-sing-up/alumnos-sing-up.component";
import { AlumnosPanelControlComponent } from "./components-usuarios/alumnos-panel-control/alumnos-panel-control.component";
import { AlumnosClasesComponent } from "./components-usuarios/alumnos-clases/alumnos-clases.component";
import { AlumnosActividadesComponent } from "./components-usuarios/alumnos-actividades/alumnos-actividades.component";
import { AlumnosActividadesFormComponent } from "./components-usuarios/alumnos-actividades-form/alumnos-actividades-form.component";
import { AlumnosListCalificacionesComponent } from "./components-usuarios/alumnos-list-calificaciones/alumnos-list-calificaciones.component";
import { GraficadoraComponent } from "./components_extras/graficadora/graficadora.component";

const routes: Routes=[
    { path: '', component: PaginaPrincipalComponent },
    { path: 'profesores-login', component: MaestroLoginComponent },
    { path: 'alumnos-login', component: AlumnoLoginComponent },
    { path: 'chatbot', component: ChatbotInterfazComponent },
    { path: 'temario', component:  ListTemarioComponent},
    { path: 'numeros-primos-teoria', component: NumerosPrimosTeoriaComponent },
    { path: 'numeros-primos-ejercicios', component: NumerosPrimosEjeciciosComponent},
    { path: 'criterios-divisibilidad-teoria', component: CriteriosDivisibilidadTeoriaComponent },
    { path: 'criterios-divisibilidad-ejercicios', component: CriteriosDivisibilidadEjeciciosComponent },
    { path: 'ecuaciones-cuadraticas-teoria', component: EcuacionesCuadraticasTeoriaComponent },
    { path: 'ecuaciones-cuadraticas-ejercicios', component: EcuacionesCuadraticasEjeciciosComponent },
    { path: 'teorema-pitagoras-teoria', component: TeoremaPitagorasTeoriaComponent },
    { path: 'teorema-pitagoras-ejercicios', component: TeoremaPitagorasEjeciciosComponent },
    { path: 'algebra-teoria', component: AlbegraTeoriaComponent },
    { path: 'algebra-ejercicios', component: AlgebraEjeciciosComponent },
    { path: 'funciones-teoria', component: FuncionesTeoriaComponent },
    { path: 'funciones-ejercicios', component: FuncionesEjeciciosComponent },
    { path: 'trigonometria-teoria', component: TrigonometriaTeoriaComponent },
    { path: 'trigonometria-ejercicios', component: TrigonometriaEjeciciosComponent },
    { path: 'geometria-teoria', component: GeometriaTeoriaComponent },
    { path: 'geometria-ejercicios', component: GeometriaEjeciciosComponent },
    { path: 'calculo-teoria', component: CalculoTeoriaComponent },
    { path: 'calculo-ejercicios', component: CalculoEjeciciosComponent },
    { path: 'redes-neuronales-mainscreen', component: RedesNeuronalesComponent},
    { path: 'panel-profesor/:idprofesor', component: ProfesoresPanelControlComponent},
    { path: 'profesor-arbol-decision/:idprofesor', component: ProfesoresArbolDecisionComponent},
    { path: 'profesor-sing-up', component: ProfesoresSingUpComponent},
    { path: 'cursos/:idprofesor', component: ListCursosComponent },
    { path: 'add/:profesor', component: AddEditCursosComponent },
    { path: 'edit/:profesor/:codigo', component: AddEditCursosComponent },
    { path: 'profesor-actividades/:idprofesor', component: ProfesoresActividadesComponent},
    { path: 'profesor-actividadesAdd/:idprofesor', component: ProfesoresActividadesAddEditActividadesComponent},
    { path: 'alumnos-sing-up', component:AlumnosSingUpComponent},
    { path: 'panel-alumnos/:idalumno', component:AlumnosPanelControlComponent},
    { path: 'alumnos-curso/:idalumno', component: AlumnosClasesComponent},
    { path: 'alumnos-actividades/:idalumno', component: AlumnosActividadesComponent},
    { path: 'alumnos-actividades-form/:alumno/:clase/:actividad', component: AlumnosActividadesFormComponent},
    { path: 'alumnos-list-calificaciones/:alumno', component: AlumnosListCalificacionesComponent},
    { path: 'grafica',component: GraficadoraComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }