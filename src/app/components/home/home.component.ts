import { PeliculasService } from '../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  populares: any;
  titulo_populares: string;
  tituloActual: string;
  actuales: any;
  

  constructor( private _peliculasService: PeliculasService ) {
    this._peliculasService.getPopulares().subscribe(
      data => {
        console.log(data);
        this.populares = data;
      })

      this._peliculasService.getActuales().subscribe(
        data => {
          this.actuales = data;
          
        })
      
     
   }

  ngOnInit() {
  }

}
