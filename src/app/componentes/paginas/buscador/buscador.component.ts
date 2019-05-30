import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(private hs: HeroesService, private _ar: ActivatedRoute, private _r: Router) { }

  ngOnInit() {
    this._ar.params.subscribe(
      params => {
        this.termino = params['termino'];
        this.heroes = this.hs.buscarHeroe(this.termino);
      }
    );
  }
  verHeroe(id: number) {
    this._r.navigate(['/heroe', id]);
   }

}
