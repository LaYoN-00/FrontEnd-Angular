import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { NavbarComponent } from './components/navbar/navbar.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { AddEditCursosComponent } from './components/add-edit-cursos/add-edit-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCursosComponent,
    AddEditCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
