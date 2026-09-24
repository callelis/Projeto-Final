import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-login',
  imports: [Menu, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private readonly router: Router) {}

  protected credentials = {
    login: '',
    password: '',
    lgpdAccepted: false,
  };
  protected errorMessage = '';
  protected successMessage = '';
  protected recoveryEmail = '';
  protected showRecovery = false;
  protected recoveryError = '';
  protected recoverySuccess = '';

  protected submitLogin(): void {
    this.errorMessage = '';
    this.successMessage = '';

    const validLogin = this.credentials.login === 'admTopEng' || this.credentials.login === 'CarlaLisboa';

    if (!validLogin || this.credentials.password !== 'TopEng2026') {
      this.errorMessage = 'Login ou senha incorretos. Informe suas credenciais novamente.';
      this.credentials.login = '';
      this.credentials.password = '';
      return;
    }

    sessionStorage.setItem('topeng-authenticated', 'true');
    sessionStorage.setItem('topeng-user', this.credentials.login);
    const email = this.credentials.login === 'admTopEng' ? 'admtopeng@topeng.com' : 'carlalisboa@topeng.com';
    console.info('TopEng: credenciais autenticadas', {
      login: this.credentials.login,
      password: this.credentials.password,
      email,
    });
    this.successMessage = 'Credenciais confirmadas. Acesso autorizado.';
    void this.router.navigate(['/dashboard']);
  }

  protected toggleRecovery(): void {
    this.showRecovery = !this.showRecovery;
    this.recoveryError = '';
    this.recoverySuccess = '';
  }

  protected recoverPassword(): void {
    this.recoveryError = '';
    this.recoverySuccess = '';
    const validEmail = this.recoveryEmail === 'admtopeng@topeng.com' || this.recoveryEmail === 'carlalisboa@topeng.com';

    if (!validEmail) {
      this.recoveryError = 'E-mail não encontrado. Confira o endereço cadastrado.';
      return;
    }

    console.info('TopEng: solicitação de recuperação de senha', { email: this.recoveryEmail });
    this.recoverySuccess = 'Sua senha foi enviada por e-mail.';
  }
}
