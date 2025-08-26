import { ScrollService } from '@/core/services/scroll.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home4-hero',
  standalone:true,
  host: { 'data-component-id': 'home4-hero-instance' },
  templateUrl: './home4-hero.component.html',
  styles: ``
})
export class Home4HeroComponent {
      public scroll = inject(ScrollService); 
}
