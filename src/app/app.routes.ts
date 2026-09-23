import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Contato } from './pages/contato/contato';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'contato', component: Contato },
	{ path: 'login', component: Login },
	{ path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
	{ path: '**', redirectTo: '' },
];
