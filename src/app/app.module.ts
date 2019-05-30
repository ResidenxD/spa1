import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { AboutComponent } from './componentes/paginas/about/about.component';
import { HeroesComponent } from './componentes/paginas/heroes/heroes.component';
import { HeroeComponent } from './componentes/paginas/heroe/heroe.component';
import { APP_ROUTING } from './app.routes';
import { HeroesService } from './servicios/heroes.service';
import { BuscadorComponent } from './componentes/paginas/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
