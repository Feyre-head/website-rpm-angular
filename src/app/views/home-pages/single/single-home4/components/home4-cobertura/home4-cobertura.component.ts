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
            image: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.610602238543!2d-52.04981462328945!3d-25.569442739503053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94efa1e9280230d5%3A0xc0f30f4782e7af6c!2sRPM%20Telecom!5e0!3m2!1spt-BR!2sbr!4v1756216535221!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
