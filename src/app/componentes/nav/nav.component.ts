import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _hs:HeroesService,private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/buscar',termino]);
  }

}
