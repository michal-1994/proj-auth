import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    menuVisible!: boolean;

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.setInitialMenuVisibility();
    }

    ngOnInit(): void {
        this.setInitialMenuVisibility();
    }

    logout() {
        console.log('logout');
    }

    toggleMenu() {
        if (window.innerWidth < 768) {
            this.menuVisible = !this.menuVisible;
        }
    }

    setInitialMenuVisibility() {
        this.menuVisible = window.innerWidth > 767;
    }
}
