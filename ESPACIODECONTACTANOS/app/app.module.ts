import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'angular4-carousel';

import { AppComponent } from './app.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioContactoComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
   [CarouselModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
