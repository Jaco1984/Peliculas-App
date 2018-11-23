import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  @Input('posterPopulares') posterPopulares;
  @Input('titulo_populares') titulo_populares;
  @Input('tituloActual') tituloActual;
  @Input('posterActual') posterActual;

  
  constructor() { }

  ngOnInit() {
  }

}
