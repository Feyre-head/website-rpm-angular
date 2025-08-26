// src/app/directives/scroll-spy.directive.ts

import { Directive, ElementRef, Input, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true, // se seu projeto for baseado em standalone components
})
export class ScrollSpyDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollSpy') sectionId: string | undefined;

  private observer: IntersectionObserver | undefined;
  private el = inject(ElementRef);
  private location = inject(Location);

  constructor() { }

  ngAfterViewInit(): void {
    if (!this.sectionId) {
      return;
    }

    const options: IntersectionObserverInit = {
      root: null, // null significa que o viewport é a raiz
      threshold: 0.5, // A URL muda quando 50% da seção estiver visível
      rootMargin: '0px'
    };

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    this.observer.observe(this.el.nativeElement);
  }

  private handleIntersect(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // O elemento está visível, então atualizamos a URL com o hash
        if (this.sectionId) {
          this.updateUrl(this.sectionId);
        }

      } else {
        // O elemento não está mais visível. Verificamos se o hash atual é o dessa seção antes de limpar.
        const currentHash = window.location.hash;
        if (currentHash === `#${this.sectionId}`) {
          this.updateUrl(null);
        }
      }
    });
  }

  private updateUrl(sectionId: string | null): void {
    const currentPath = this.location.path().split('#')[0];
    const newUrl = sectionId ? `${currentPath}#${sectionId}` : currentPath;

    // Usamos replaceState para não adicionar uma nova entrada no histórico do navegador
    this.location.replaceState(newUrl);
  }

  ngOnDestroy(): void {
    // Limpeza: desconectamos o observer para evitar memory leaks
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}