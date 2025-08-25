import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '@/core/services/scroll.service';

@Component({
  selector: 'app-home4-about',
  standalone:true,
  host: { 'data-component-id': 'home4-about-instance' },
  templateUrl: './home4-about.component.html',
  styles: ``
})
export class Home4AboutComponent {
  public scroll =  inject(ScrollService);

}
