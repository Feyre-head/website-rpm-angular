import { ScrollService } from '@/core/services/scroll.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

@Component({
    selector: 'app-single-nav-items',
    imports: [CommonModule],
    templateUrl: './single-nav-items.component.html',
    styles: ``
})
export class SingleNavItemsComponent {
    public scroll = inject(ScrollService)
    @Input() menuItems: string[] = ["Início","Sobre a RPM",  "Planos", "Benefícios","Cobertura", "Suporte", "Contato"]

    slugify(text: string): string {
        return text
        .toLowerCase()
        .normalize('NFD')                // separa acentos
		.replace(/[\u0300-\u036f]/g, '') // remove acentos
		.replace(/\s+/g, '-')            // espaços -> '-'
		.replace(/[^a-z0-9-]/g, '');     // limpa extras
    }
}
