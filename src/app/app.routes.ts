import { Routes, RouterModule, Router } from '@angular/router';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { HeroesComponent } from './componentes/paginas/heroes/heroes.component';
import { AboutComponent } from './componentes/paginas/about/about.component';
import { HeroeComponent } from './componentes/paginas/heroe/heroe.component';
import { BuscadorComponent } from './componentes/paginas/buscador/buscador.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component:  HeroeComponent },
    { path: 'buscar/:termino', component:  BuscadorComponent },
    { path: '**', pathMatch:'full', redirectTo:'Inicio' },

    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
