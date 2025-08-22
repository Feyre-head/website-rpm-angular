import { Component } from '@angular/core';
import { LayoutComponent } from "@layouts/layout.component";
import { Home1HeroComponent } from "./components/home1-hero/home1-hero.component";
import { Home1AboutComponent } from "./components/home1-about/home1-about.component";
import { Home1ServiceComponent } from "./components/home1-service/home1-service.component";
import { Home1WorkComponent } from "./components/home1-work/home1-work.component";
import { Home1CaseStudiesComponent } from "./components/home1-case-studies/home1-case-studies.component";
import { Home1TestimonialComponent } from "./components/home1-testimonial/home1-testimonial.component";
import { Home1TeamComponent } from "./components/home1-team/home1-team.component";
import { Home1BlogsComponent } from "./components/home1-blogs/home1-blogs.component";

@Component({
  selector: 'app-home1',
  imports: [LayoutComponent, Home1HeroComponent, Home1AboutComponent, Home1ServiceComponent, Home1WorkComponent, Home1CaseStudiesComponent, Home1TestimonialComponent, Home1TeamComponent, Home1BlogsComponent],
  templateUrl: './home1.component.html',
  styles: ``
})
export class Home1Component {

}
