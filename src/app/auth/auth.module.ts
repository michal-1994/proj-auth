import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
    declarations: [LoginComponent, SignUpComponent],
    imports: [CommonModule],
    exports: [LoginComponent, SignUpComponent]
})
export class AuthModule {}
