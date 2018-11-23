import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-informacion-pelis',
  templateUrl: './informacion-pelis.component.html',
  styleUrls: ['./informacion-pelis.component.css']
})
export class InformacionPelisComponent implements OnInit {
  id: number ;
  pelicula:any;
  regresar:string = "";
  

  constructor( private _peliculasService: PeliculasService,
               private _activatedRoute: ActivatedRoute ) {
                 console.log("entra");
   this._activatedRoute.params.subscribe( params =>   {
     console.log(params);
     this.regresar = params['pag'];
     console.log(this.regresar);
     
     this._peliculasService.getInformacion( params['id']).subscribe( data => {
      console.log(data);
       this.pelicula = data;
       
     })
   });
    
   }

  ngOnInit() {
  }

}
