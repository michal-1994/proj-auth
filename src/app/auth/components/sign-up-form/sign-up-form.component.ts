import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../validators/custom-validators';

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
        this.signupForm = this.formBuilder.group(
            {
                email: new FormControl(null, {
                    validators: Validators.email,
                    updateOn: 'blur'
                }),
                password: new FormControl(null, {
                    updateOn: 'blur'
                }),
                passwordConfirmation: new FormControl(null)
            },
            {
                validator: CustomValidators.passwordMatchValidator
            }
        );
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
