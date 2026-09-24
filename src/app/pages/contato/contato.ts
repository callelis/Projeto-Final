import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-contato',
  imports: [Menu, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  protected contact = {
     subject: '',
     name: '',
     email: '',
     message: '',
  };

  protected submitContact(form: NgForm): void {
    console.info('TopEng: formulário de contato enviado', { ...this.contact });
    form.resetForm();
  }
}
