import { ScrollService } from '@/core/services/scroll.service';
import {ScrollSpyDirective} from '../../../../directives/scroll-spy.directive';
import { Component, inject  } from '@angular/core';
import { Home4HeroComponent } from "./components/home4-hero/home4-hero.component";
import { Home4AboutComponent } from "./components/home4-about/home4-about.component";
import { Home4BeneficiosComponent } from "./components/home4-beneficios/home4-beneficios.component";
import { Home4CoberturaComponent } from './components/home4-cobertura/home4-cobertura.component';
import { Home4PlanosComponent } from "./components/home4-planos/home4-planos.component";
// import { Home4TestimonialComponent } from "./components/home4-testimonial/home4-testimonial.component";
import { Home4BlogsComponent } from "./components/home4-blogs/home4-blogs.component";
import { Home4SuporteComponent } from "./components/home4-suporte/home4-suporte.component";
import { Home4CtaComponent } from "./components/home4-cta/home4-cta.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import { SingleHeader4Component } from "./components/single-header4/single-header4.component";

@Component({
  selector: 'app-single-home4',
  standalone:true,
  imports: [Home4HeroComponent, Home4AboutComponent, Home4BeneficiosComponent, Home4SuporteComponent, Home4CoberturaComponent, Home4PlanosComponent, Home4BlogsComponent, Home4CtaComponent, FooterComponent, SingleHeader4Component, ScrollSpyDirective],
  templateUrl: './single-home4.component.html',
  styles: ``
})
export class SingleHome4Component {
  public scroll = inject(ScrollService); 

}
