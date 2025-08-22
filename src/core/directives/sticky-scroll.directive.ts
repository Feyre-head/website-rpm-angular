import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[stickyScroll]',
    standalone: true
})
export class StickyScrollDirective {
    @HostBinding('class.header-sticky') isSticky = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scroll = window.scrollY || window.pageYOffset;
        this.isSticky = scroll > 100;
    }
}
