import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  frase: any = {
    nombre : 'Ben Parker',
    mensaje: 'Un gran poder, requiere una gran responsabilidad'
  };
  mostrar: boolean= false;

  constructor() { }

  ngOnInit() {
  }

}
