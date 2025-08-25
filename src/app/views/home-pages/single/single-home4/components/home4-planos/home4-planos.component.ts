import type { PlanosType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home4-planos',
    standalone: true,
    host: { 'data-component-id': 'home4-planos-instance' },
    imports: [CommonModule],
    templateUrl: './home4-planos.component.html',
    styles: ``
})
export class Home4PlanosComponent {
    planos: PlanosType[] = [
        {
            name: 'Basic',
            monthlyPrice: 60,
            yearlyPrice: 600,
            features: [
                'Tailored IT Solutions',
                'Proactive System Monitoring',
                'Scalable Cloud Solutions',
                'Cybersecurity Protection',
                'Secure Data Backup & Recovery',
                'Custom Software Development',
                'IT Infrastructure Management',
                'Data Encryption & Compliance',
            ],
        },
        {
            name: 'Pro',
            monthlyPrice: 80,
            yearlyPrice: 800,
            features: [
                'Tailored IT Solutions',
                'Proactive System Monitoring',
                'Scalable Cloud Solutions',
                'Cybersecurity Protection',
                'Secure Data Backup & Recovery',
                'Custom Software Development',
                'IT Infrastructure Management',
                'Data Encryption & Compliance',
            ],
            isPopular: true,
        },
        {
            name: 'Premium',
            monthlyPrice: 70,
            yearlyPrice: 700,
            features: [
                'Tailored IT Solutions',
                'Proactive System Monitoring',
                'Scalable Cloud Solutions',
                'Cybersecurity Protection',
                'Secure Data Backup & Recovery',
                'Custom Software Development',
                'IT Infrastructure Management',
                'Data Encryption & Compliance',
            ],
        },
    ];
}
