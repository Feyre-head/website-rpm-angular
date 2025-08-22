import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { Home3HeaderComponent } from "./components/home3-header/home3-header.component";
import { Home3HeroComponent } from "./components/home3-hero/home3-hero.component";
import { Home3WorkComponent } from "./components/home3-work/home3-work.component";
import { Home3SupportComponent } from "./components/home3-support/home3-support.component";
import { Home3FeaturesComponent } from "./components/home3-features/home3-features.component";
import { Home3PricingComponent } from "./components/home3-pricing/home3-pricing.component";
import { Home3FaqComponent } from "./components/home3-faq/home3-faq.component";
import { Home3CtaComponent } from "./components/home3-cta/home3-cta.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import { Home3AboutComponent } from "./components/home3-about/home3-about.component";
import { FaviconService } from '@/core/services/favicon.service';

@Component({
    selector: 'app-home3',
    imports: [Home3HeaderComponent, Home3HeroComponent, Home3WorkComponent, Home3SupportComponent, Home3FeaturesComponent, Home3PricingComponent, Home3FaqComponent, Home3CtaComponent, FooterComponent, Home3AboutComponent],
    templateUrl: './home3.component.html',
    styles: ``
})
export class Home3Component implements OnInit, OnDestroy {
    private faviconService = inject(FaviconService)

    ngOnInit(): void {
        this.faviconService.setFavicon('assets/img/logo/fav-logo3.png');
    }
    ngOnDestroy(): void {
        this.faviconService.setFavicon('assets/img/logo/fav-logo1.png');
    }
}
