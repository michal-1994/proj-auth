import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
    signupForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: ['', Validators.email],
            password: [''],
            passwordConfirmation: ['']
        });
    }

    get email() {
        return this.signupForm.get('email');
    }

    get password() {
        return this.signupForm.get('password');
    }

    get passwordConfirmation() {
        return this.signupForm.get('passwordConfirmation');
    }

    get f() {
        return this.signupForm.controls;
    }

    signup() {
        const signupRequest = {
            email: this.f['email'].value,
            password: this.f['password'].value
        };

        console.log(signupRequest);
    }
}
