import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/// COMPONENTES
import { ListCursosComponent } from "./components/list-cursos/list-cursos.component";
import { AddEditCursosComponent } from "./components/add-edit-cursos/add-edit-cursos.component";

const routes: Routes=[
    { path: '', component: ListCursosComponent },
    { path: 'add', component: AddEditCursosComponent },
    { path: 'edit/:codigo', component: AddEditCursosComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }