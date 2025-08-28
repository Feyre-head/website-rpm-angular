import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, type OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import type { CoberturaType } from '@/types';

@Component({
    selector: 'app-home4-cobertura',
    standalone: true,
    host: { 'data-component-id': 'home4-cobertura-instance' },
    imports: [CarouselModule, CommonModule, GsapRevealDirective],
    templateUrl: './home4-cobertura.component.html',
    styles: ``
})
export class Home4CoberturaComponent {
    

    cobertura: CoberturaType[] = [
        {
            image: 'assets/img/all-images/case/case-img6.png',
            tag: 'Candói/PR',
            title: 'Rua Manoel Lopes de Oliveira, 2572, Sala 01 - Centro'
        },
        {
            image: 'assets/img/all-images/case/case-img6.png',
            tag: '#Network Optimization',
            title: 'Business Continuity with An BackupShield Data Recovery'
        },
        {
            image: 'assets/img/all-images/case/case-img8.png',
            tag: '#Cyber Security',
            title: 'Strengthening Security with A TechGuard Cybersecurity'
        },
        {
            image: 'assets/img/all-images/case/case-img5.png',
            tag: '#Cyber Security',
            title: 'Strengthening Security with A TechGuard Cybersecurity'
        }
    ];

    customOptions: OwlOptions = {
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        items: 10,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    }
}
