import { ScrollService } from '@/core/services/scroll.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-single-mobile-menu',
    imports: [CommonModule,RouterLink],
    templateUrl: './single-mobile-menu.component.html',
    styles: ``
})
export class SingleMobileMenuComponent {
    @Input() isMobileMenuOpen!: boolean
    @Input() className?: string='homepage4-body'
    @Input() menuItems: string[] = ["Início","Sobre a RPM",  "Planos", "Benefícios","Cobertura", "Suporte", "Contato"]

    public scroll = inject(ScrollService)

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
    }

    slugify(text: string): string {
        return text
        .toLowerCase()
        .normalize('NFD')                // separa acentos
		.replace(/[\u0300-\u036f]/g, '') // remove acentos
		.replace(/\s+/g, '-')            // espaços -> '-'
		.replace(/[^a-z0-9-]/g, '');     // limpa extras
    }
}
