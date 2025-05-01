import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
// import { RouterModule  } from '@angular/router';
import { PrecosComponent } from './precos/precos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre-nos', component: SobreNosComponent },
    { path: 'precos', component: PrecosComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }

];
