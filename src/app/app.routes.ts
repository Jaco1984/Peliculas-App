import { InformacionPelisComponent } from './components/informacion-pelis/informacion-pelis.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';



const APP_ROUTES: Routes = [
    {path :'home', component: HomeComponent},
    {path :'buscar', component: BuscarComponent},
    {path :'buscarPeli/:texto', component: BuscarComponent},
    {path :'informacion/:id/:pag', component: InformacionPelisComponent},
    {path : '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });