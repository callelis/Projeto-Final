import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
	const router = inject(Router);
	const isAuthenticated = sessionStorage.getItem('topeng-authenticated') === 'true';

	if (isAuthenticated) {
		return true;
	}

	sessionStorage.removeItem('topeng-authenticated');
	return router.createUrlTree(['/login']);
};