import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(private hs: HeroesService, private ar: ActivatedRoute) {
    this.ar.params.subscribe(
     params => {
       this.heroe = this.hs.getHeroe(params["id"]);
     }
    );
   }

  ngOnInit() {
  }

}
