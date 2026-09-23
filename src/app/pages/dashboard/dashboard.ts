import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-dashboard',
  imports: [Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected readonly isCarla = sessionStorage.getItem('topeng-user') === 'CarlaLisboa';
  protected readonly completedTasks = [false, false, false];

  protected toggleTask(index: number): void {
    this.completedTasks[index] = !this.completedTasks[index];
  }

}
