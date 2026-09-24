import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

interface DashboardWork {
  name: string;
  location: string;
  type: string;
  status: 'Em andamento' | 'Concluída';
  responsible: boolean;
  progress: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected readonly isCarla = sessionStorage.getItem('topeng-user') === 'CarlaLisboa';
  protected readonly completedTasks = [false, false, false];
  private readonly allWorks: DashboardWork[] = [
    { name: 'Reabilitação de rodovias', location: 'Feira de Santana · BA', type: 'Pavimentação', status: 'Em andamento', responsible: true, progress: 68 },
    { name: 'Passarela de Pituaçu', location: 'Salvador · BA', type: 'Restauração', status: 'Em andamento', responsible: true, progress: 42 },
    { name: 'Plataforma industrial', location: 'Camaçari · BA', type: 'Terraplanagem', status: 'Em andamento', responsible: false, progress: 81 },
    { name: 'Barragem Itapicuru-Açu', location: 'Ponto Novo · BA', type: 'Restauração', status: 'Concluída', responsible: true, progress: 100 },
    { name: 'Rodovia BA-001', location: 'Itacaré · BA', type: 'Pavimentação', status: 'Concluída', responsible: false, progress: 100 },
    { name: 'Sistema viário urbano', location: 'Ilhéus · BA', type: 'Restauração', status: 'Concluída', responsible: false, progress: 100 },
  ];
  protected readonly visibleWorks = this.isCarla ? this.allWorks.filter((work) => work.responsible) : this.allWorks;
  protected readonly activeWorks = this.visibleWorks.filter((work) => work.status === 'Em andamento');
  protected readonly completedWorks = this.visibleWorks.filter((work) => work.status === 'Concluída');
  protected selectedTask: { name: string; engineer: string; project: string; city: string; investor: string } | null = null;
  private readonly taskDetails = [
    { name: 'Revisar cronograma de obras', engineer: 'Carla Lisboa', project: 'Reabilitação de rodovias', city: 'Feira de Santana', investor: 'DNIT' },
    { name: 'Validar relatório de campo', engineer: 'Marcos Oliveira', project: 'Passarela de Pituaçu', city: 'Salvador', investor: 'DERBA' },
    { name: 'Alinhar entregas da semana', engineer: 'Ana Martins', project: 'Ampliação do sistema de saneamento', city: 'Itabuna', investor: 'EMBASA' },
  ];

  protected toggleTask(index: number): void {
    this.completedTasks[index] = !this.completedTasks[index];
  }

  protected openTask(index: number): void { this.selectedTask = this.taskDetails[index]; }

  protected closeTask(): void { this.selectedTask = null; }

}
