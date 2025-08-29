import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
    imports: [CommonModule, RouterLink, RouterLinkActive],
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
                { label: 'Home', link: '#inicio' },
                { label: 'Planos', link: '#planos' },
                { label: 'Contato', link: '#contato' },
                { label: 'Onde Estamos', link: '#cobertura' }
            ],
        },
        {
            title: 'Serviços',
            items: [
                { label: 'Central De Comunicação', link: 'https://www.rpmtelecom.com.br/links.html' },
                { label: 'Central Do Assinante', link: 'https://www.rpmtelecom.com.br/ca/#/login' },
                { label: 'Teste de Velocidade', link: 'https://www.speedtest.net/pt' },
            ],
        },
        {
            title: 'Documentos',
            items: [
                { label: 'Contrato', link: 'assets/files/contratoRpm.pdf', icon: 'assets/img/icons/doc.svg' },

                // { label: '42 9123-1900', link: 'https://wa.me/554291231900', icon: 'assets/img/icons/phn1.svg' },
                // { label: '42 3638-1900', link: '', icon: 'assets/img/icons/phn1.svg' },
                // { label: '0800 649 1900', link: '',  icon: 'assets/img/icons/phn1.svg'  },
                // { label: 'contato@rpmtelecom', link: 'mailto:contato@rpmtelecom.com.br', icon: 'assets/img/icons/email1.svg' },
                // { label: 'rpmtelecom.com', icon: 'assets/img/icons/global1.svg' }
            ],
        },
    ];

    isExternal(link?: string): boolean {
        return !!link && /^(https?:\/\/|mailto:|tel:|\/\/)/i.test(link);
    }

    /** Trata arquivos como externos (href), ex.: .pdf, .docx, .zip etc. */
    isFile(link?: string): boolean {
        return !!link && /\.(pdf|docx?|xlsx?|csv|zip|rar|png|jpe?g|svg|webp)$/i.test(link);
    }

    isAnchor(link?: string): boolean {
        return !!link && link.startsWith('#');
    }


}
