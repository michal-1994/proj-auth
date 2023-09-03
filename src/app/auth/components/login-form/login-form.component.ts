import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
    subscription = new Subscription();
    loginForm!: FormGroup;
    isPasswordVisible: boolean = false;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly authService: AuthService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: new FormControl(null, {
                validators: Validators.email
            }),
            password: new FormControl(null)
        });
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    get f() {
        return this.loginForm.controls;
    }

    login() {
        this.subscription = this.authService
            .login({
                email: this.f['email'].value,
                password: this.f['password'].value
            })
            .subscribe();
    }

    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
