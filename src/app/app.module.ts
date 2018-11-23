import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { PeliculasService } from './services/peliculas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ImagenPipePipe } from './pipes/imagen-pipe.pipe';
import { BuscarComponent } from './components/buscar/buscar.component';
import { InformacionPelisComponent } from './components/informacion-pelis/informacion-pelis.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PeliculasComponent,
    ImagenPipePipe,
    BuscarComponent,
    InformacionPelisComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
