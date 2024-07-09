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

const routes: Routes=[
    { path: '', component: PaginaPrincipalComponent },
    { path: 'profesores-login', component: MaestroLoginComponent },
    { path: 'alumnos-login', component: AlumnoLoginComponent },
    { path: 'chatbot', component: ChatbotInterfazComponent },
    { path: 'temario', component:  ListTemarioComponent},
    { path: 'numeros-primos-teoria', component: NumerosPrimosTeoriaComponent },
    { path: 'criterios-divisibilidad-teoria', component: CriteriosDivisibilidadTeoriaComponent },
    { path: 'ecuaciones-cuadraticas-teoria', component: EcuacionesCuadraticasTeoriaComponent },
    { path: 'teorema-pitagoras-teoria', component: TeoremaPitagorasTeoriaComponent },
    { path: 'algebra-teoria', component: AlbegraTeoriaComponent },
    { path: 'funciones-teoria', component: FuncionesTeoriaComponent },
    { path: 'trigonometria-teoria', component: TrigonometriaTeoriaComponent },
    { path: 'geometria-teoria', component: GeometriaTeoriaComponent },
    { path: 'calculo-teoria', component: CalculoTeoriaComponent },
    { path: 'cursos', component: ListCursosComponent },
    { path: 'add', component: AddEditCursosComponent },
    { path: 'edit/:codigo', component: AddEditCursosComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }