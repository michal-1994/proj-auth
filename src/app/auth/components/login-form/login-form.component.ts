import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
    sub = new Subscription();
    loginForm!: FormGroup;
    isPasswordVisible: boolean = false;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly service: AuthService,
        private readonly toastr: ToastrService
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
        this.sub = this.service
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
        this.sub.unsubscribe();
    }
}
