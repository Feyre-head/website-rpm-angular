import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type FooterItem = {
    label: string;
    link?: string;
    icon?: string;
}

export type FooterSection = {
    title: string;
    items: FooterItem[];
}

@Component({
    selector: 'app-footer',
    imports: [CommonModule,RouterLink],
    templateUrl: './footer.component.html',
    styles: ``
})
export class FooterComponent {
    @Input() logo: string = 'assets/img/logo/logo2.png'
    @Input() containerClass: string = 'vl-footer1-section-area'
    @Input() topSpace: boolean = false


    currentYear = new Date().getFullYear()

    footerLinks: FooterSection[] = [
        {
            title: 'Links Rápidos',
            items: [
                { label: 'Home', link: '/' },
                { label: 'Planos', link: '/services' },                
                { label: 'Contato' },
                { label: 'Onde Estamos', link: '/blogs/one' }                
            ],
        },
        {
            title: 'Serviços',
            items: [                    
                { label: 'Central De Comunicação' },
                { label: 'Central Do Assinante' },
                { label: 'Teste de Velocidade' }  
                             
            ],
        },
        {
            title: 'Documentos',
            items: [
                { label: 'Contrato' },                 
                  
                // { label: '42 9123-1900', link: 'https://wa.me/554291231900', icon: 'assets/img/icons/phn1.svg' },
                // { label: '42 3638-1900', link: '', icon: 'assets/img/icons/phn1.svg' },
                // { label: '0800 649 1900', link: '',  icon: 'assets/img/icons/phn1.svg'  },
                // { label: 'contato@rpmtelecom', link: 'mailto:contato@rpmtelecom.com.br', icon: 'assets/img/icons/email1.svg' },
                // { label: 'rpmtelecom.com', icon: 'assets/img/icons/global1.svg' }
            ],
        },
    ];

}
