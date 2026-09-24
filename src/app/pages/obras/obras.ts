import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

interface Work {
  name: string;
  location: string;
  detail: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-obras',
  imports: [DecimalPipe, Menu],
  templateUrl: './obras.html',
  styleUrl: './obras.css',
})
export class Obras {
  protected readonly categories = [
    {
      name: 'Pavimentação',
      description: 'Infraestrutura viária para conectar pessoas, cidades e oportunidades.',
      works: [
        { name: 'Reabilitação de rodovias', location: 'Feira de Santana · BA', detail: 'Recuperação e melhoria da malha rodoviária', image: '/img/obra1.jpg', imageAlt: 'Máquinas trabalhando na reabilitação de uma rodovia' },
        { name: 'Acesso ao Porto de Salvador', location: 'Salvador · BA', detail: 'Pavimentação e adequação de acessos', image: '/img/obra2.jpg', imageAlt: 'Obra de infraestrutura viária em andamento' },
        { name: 'Rodovia BA-001', location: 'Itacaré · BA', detail: 'Implantação e pavimentação de trecho rodoviário', image: '/img/obra3.jpg', imageAlt: 'Estrutura viária construída pela TopEng' },
      ] satisfies Work[],
    },
    {
      name: 'Terraplanagem',
      description: 'Preparação precisa do terreno para receber projetos duradouros.',
      works: [
        { name: 'Plataforma industrial', location: 'Camaçari · BA', detail: 'Movimentação e compactação de solo', image: '/img/obra4.jpg', imageAlt: 'Terreno preparado para uma obra de infraestrutura' },
        { name: 'Terminal logístico', location: 'Aratu · BA', detail: 'Preparação de área para implantação', image: '/img/seneamentoSaoFranciscoConde.jpg', imageAlt: 'Área de infraestrutura em implantação' },
        { name: 'Expansão aeroportuária', location: 'Vitória da Conquista · BA', detail: 'Regularização e conformação de terreno', image: '/img/obra1.jpg', imageAlt: 'Equipamento em área de terraplanagem' },
      ] satisfies Work[],
    },
    {
      name: 'Restauração',
      description: 'Cuidado técnico para prolongar a vida útil da infraestrutura.',
      works: [
        { name: 'Passarela de Pituaçu', location: 'Salvador · BA', detail: 'Restauração e manutenção de obra de arte especial', image: '/img/obra3.jpg', imageAlt: 'Passarela de infraestrutura urbana' },
        { name: 'Barragem Itapicuru-Açu', location: 'Ponto Novo · BA', detail: 'Recuperação de estruturas e acessos', image: '/img/barragemBarraChoça.jpg', imageAlt: 'Barragem em processo de recuperação' },
        { name: 'Sistema viário urbano', location: 'Ilhéus · BA', detail: 'Restauração de pavimento e drenagem', image: '/img/obra2.jpg', imageAlt: 'Obra de restauração de sistema viário' },
      ] satisfies Work[],
    },
  ];

  protected readonly totalWorks = this.categories.reduce((total, category) => total + category.works.length, 0);
  protected readonly locations = new Set(this.categories.flatMap((category) => category.works.map((work) => work.location.split(' · ')[0]))).size;
  protected selectedWork: Work | null = null;

  protected openImage(work: Work): void {
    this.selectedWork = work;
  }

  protected closeImage(): void {
    this.selectedWork = null;
  }
}
