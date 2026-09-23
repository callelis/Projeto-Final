import { booleanAttribute, Component, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  readonly mode = input<'header' | 'footer'>('header');
  readonly showWebmail = input(false, { transform: booleanAttribute });
  readonly showLogout = input(false, { transform: booleanAttribute });
  protected readonly menuOpen = signal(false);

  constructor(private readonly router: Router) {}

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected logout(): void {
    sessionStorage.removeItem('topeng-authenticated');
    sessionStorage.removeItem('topeng-user');
    void this.router.navigate(['/login']);
  }
}
