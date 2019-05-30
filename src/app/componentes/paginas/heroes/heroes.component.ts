import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  constructor(private hs: HeroesService, private _r:Router) { }

  ngOnInit() {
    this.heroes = this.hs.getHeroes();
  }

  verHeroe(id: number){
   this._r.navigate(['/heroe',id]);
  }

}
