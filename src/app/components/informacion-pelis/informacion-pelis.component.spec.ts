import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from './../../services/peliculas.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPelisComponent } from './informacion-pelis.component';

describe('InformacionPelisComponent', () => {
  let component: InformacionPelisComponent;
  let fixture: ComponentFixture<InformacionPelisComponent>;
  let peliculasServiceStub = {
    getInformacion( id: number ){
      let data = {
        id: 299536,
        original_title: 'Los increibles'
      }
      return data;
    }
  }
}

 class ActivatedRouteMock {
   constructor( pag: any )
 }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPelisComponent ],
      providers: [
        { provide: PeliculasService , useValue: peliculasServiceStub ,
        provide : ActivatedRoute, useClass: ActivatedRouteMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
