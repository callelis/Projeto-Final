import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
}
