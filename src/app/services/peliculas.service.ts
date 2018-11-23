import { map } from 'rxjs/internal/operators';
import { Jsonp, Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apyKey:string = '1f3ac7ad2372d8c095c8f5f321d3d69b';
  private urlMovie:string = 'https://api.themoviedb.org/3';
  peliculas: any[] = [];
 

  constructor(private _jsonp: Jsonp,
              private _http: Http) {  }

  getPopulares(){
    let url = `${ this.urlMovie }/discover/movie?sort_by=popularity.desc&api_key=${ this.apyKey }&languages=es&callback=JSONP_CALLBACK`;
    
    return this._jsonp.get( url).pipe(map( datos => datos.json().results   ));
    
  }

  getActuales(){
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate( hasta.getDate() + 7);
   
    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate()}`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate()}`;

    // Display the month, day, and year. getMonth() returns a 0-based number.

    let url = `${ this.urlMovie }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apyKey }&languages=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map( datos => datos.json().results ));
  }

  getBuscar(texto: string){
    let url = `${this.urlMovie}/search/multi?query=${ texto }&sort_by=popularity.desc&api_key=${this.apyKey}&language=es&callback=JSONP_CALLBACK`;
   return this._jsonp.get(url).pipe(map( data =>{
     this.peliculas = data.json().results;
      return data.json().results;
  
   } ));
  }

  getInformacion( id: number ){
    console.log("informacion_id", id);
    let url = `${this.urlMovie}/movie/${ id }?api_key=${this.apyKey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this._jsonp.get(url).pipe(map( data => {
   
    console.log(data);
    return data.json();
    }   ));
  }


}
