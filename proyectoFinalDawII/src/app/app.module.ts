import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PeliculaComponent } from './modules/pelicula/pelicula.component';
import { SalaComponent } from './modules/sala/sala.component';
import { FuncionComponent } from './modules/funcion/funcion.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { SharedModule } from './shared/shared.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    SalaComponent,
    FuncionComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
