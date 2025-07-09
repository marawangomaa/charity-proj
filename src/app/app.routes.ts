import { Routes } from '@angular/router';
import { Home } from './Pages/Home/home/home';
import { Consultant } from './Pages/Consultant/all-consultants/consultant';
import { advisoRreservationGuard } from './Guards/adviso-rreservation-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Home' },
    { path: 'all-consultants', component: Consultant, title: 'Consultants' },
    { path: 'advisor-details', loadComponent: () => import('../app/Pages/advisor-details/advisor-details').then(m => m.AdvisorDetails), title: 'Advisor Details' },
    { path: 'advisor-reservation', loadComponent: () => import('../app/Pages/reservation/reservation').then(m => m.Reservation), canActivate: [advisoRreservationGuard], title: 'Advisor Reservation' },
    { path: 'must-login', loadComponent: () => import('../app/Pages/must-login/must-login').then(m => m.MustLogin), title: 'Must Login' },
    { path: 'login', loadComponent: () => import('../app/Auth/login/login').then(m => m.Login), title: 'LogIn' },

    { path: 'not-found', loadComponent: () => import('../app/Pages/not-found/not-found').then(m => m.NotFound), title: 'Page Not Found' },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }


];
