import { Routes, RouterModule, Router } from '@angular/router';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { HeroesComponent } from './componentes/paginas/heroes/heroes.component';
import { AboutComponent } from './componentes/paginas/about/about.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component:  AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});