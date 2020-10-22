/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './componentes/alumnos/add-alumno/add-alumno.component';
import { AlumnoService } from './services/alumno.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}),

providers: {
  AlumnoService
},
bootstrap: [AppComponent]
});
export class AppModule { }
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './componentes/alumnos/add-alumno/add-alumno.component';

import { AlumnoService } from './services/alumno.service';
import { FormsModule } from '@angular/forms';
import { ListarAlumnoComponent } from './componentes/alumnos/listar-alumno/listar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    ListarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AlumnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }