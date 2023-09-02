import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

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

    constructor(readonly authService: AuthService) {}

    ngOnInit(): void {
        this.setInitialMenuVisibility();
    }

    logout() {
        this.authService.logout();
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
