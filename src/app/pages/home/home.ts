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
}
