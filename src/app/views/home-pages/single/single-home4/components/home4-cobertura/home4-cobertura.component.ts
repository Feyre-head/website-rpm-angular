import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home4-cobertura',
    standalone: true,
    imports: [CommonModule, CarouselModule],
    templateUrl: './home4-cobertura.component.html'
})
export class Home4CoberturaComponent {

        customOptions: OwlOptions = {
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoHeight: true,                 //altura ao slide
        navText: [
            "<i class='fa-solid fa-angle-left'></i>",
            "<i class='fa-solid fa-angle-right'></i>"
        ],
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
    };
}
