import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        LoginFormComponent,
        SignUpFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [LoginComponent, SignUpComponent]
})
export class AuthModule {}
