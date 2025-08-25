import type { BeneficiosType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '@/core/services/scroll.service';

@Component({
    selector: 'app-home4-beneficios',
    standalone: true,
    host: { 'data-component-id': 'home4-beneficios-instance' },
    imports: [CommonModule, RouterLink],
    templateUrl: './home4-beneficios.component.html',
    styles: ``
})
export class Home4BeneficiosComponent {
    public scroll = inject(ScrollService);
    beneficios: BeneficiosType[] = [
        // {
        //     id: 1,
        //     icon: 'assets/img/beneficios/skeelo.png',
        //     title: 'Cyber Security Solution',
        //     description: 'Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.'
        // },
        {
            id: 2,
            icon: 'assets/img/beneficios/playhub.png',
            title: 'PlayHub',
            description: 'Tenha acesso a apps de streaming como Disney+, HBO Max, Deezer e muito mais diretamente no seu plano.'
        },
        {
            id: 3,
            icon: 'assets/img/beneficios/cdntv.png',
            title: 'CDN TV',
            description: 'Assista canais ao vivo e conteúdos digitais exclusivos com qualidade e estabilidade sem complicação.'
        }
        
    ];
}
