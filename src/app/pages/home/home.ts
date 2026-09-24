import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-home',
  imports: [Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  protected readonly slides = [
    { image: '/img/obra1.jpg', caption: 'Reabilitação de rodovias', alt: 'Reabilitação de rodovias da TopEng' },
    { image: '/img/obra2.jpg', caption: 'Feira de Santana · Esgotamento sanitário', alt: 'Serviço de esgotamento sanitário em Feira de Santana' },
    { image: '/img/obra3.jpg', caption: 'Salvador · Passarela de Pituaçu', alt: 'Passarela de Pituaçu em Salvador' },
    { image: '/img/obra4.jpg', caption: 'Itapicuru-Açu · Barragem', alt: 'Barragem de Itapicuru-Açu' },
  ];
  protected readonly currentSlide = signal(0);
  protected readonly investorSlides = [
    { image: '/img/DNIT.jpg', caption: 'DNIT', alt: 'Logo DNIT' },
    { image: '/img/DERBA.png', caption: 'DERBA', alt: 'Logo DERBA' },
    { image: '/img/VALE.png', caption: 'VALE', alt: 'Logo Vale' },
    { image: '/img/PETROBRAS.png', caption: 'PETROBRAS', alt: 'Logo Petrobras' },
    { image: '/img/EMBASA.png', caption: 'EMBASA', alt: 'Logo Embasa' },
    { image: '/img/CODEBA.jpg', caption: 'CODEBA', alt: 'Logo Codeba' },
  ];
  protected readonly investorSlide = signal(0);
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.slideTimer = setInterval(() => this.nextSlide(), 5500);
  }

  ngOnDestroy(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
    }
  }

  protected nextSlide(): void {
    this.currentSlide.update((index) => (index + 1) % this.slides.length);
  }

  protected previousSlide(): void {
    this.currentSlide.update((index) => (index - 1 + this.slides.length) % this.slides.length);
  }

  protected selectSlide(index: number): void {
    this.currentSlide.set(index);
  }

  protected nextInvestor(): void { this.investorSlide.update((index) => (index + 1) % this.investorSlides.length); }

  protected previousInvestor(): void { this.investorSlide.update((index) => (index - 1 + this.investorSlides.length) % this.investorSlides.length); }

  protected selectInvestor(index: number): void { this.investorSlide.set(index); }

  protected investorPosition(index: number): 'active' | 'previous' | 'next' | 'hidden' {
    const current = this.investorSlide();
    if (index === current) return 'active';
    if (index === (current - 1 + this.investorSlides.length) % this.investorSlides.length) return 'previous';
    if (index === (current + 1) % this.investorSlides.length) return 'next';
    return 'hidden';
  }
}
