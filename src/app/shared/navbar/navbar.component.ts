import { PeliculasService } from '../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _peliculasService: PeliculasService,
               private router: Router ) { }

  ngOnInit() {
  }

  buscarNavbar( texto: string ){
    console.log(texto);
    console.log("BUSCAR");
    if( texto.length == 0 ){
      return;
    }
    this.router.navigate(['/buscarPeli', texto]);

  }
    
}
