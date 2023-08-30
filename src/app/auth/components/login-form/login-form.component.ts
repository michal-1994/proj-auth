import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
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
        const loginRequest = {
            email: this.f['email'].value,
            password: this.f['password'].value
        };

        console.log(loginRequest);
    }
}
