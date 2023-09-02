import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomValidators } from '../../validators/custom-validators';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
    signupForm!: FormGroup;
    isPasswordVisible: boolean = false;
    isPasswordConfirmationVisible: boolean = false;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly service: AuthService,
        private readonly toastr: ToastrService
    ) {}

    ngOnInit() {
        this.signupForm = this.formBuilder.group(
            {
                email: new FormControl(null, {
                    validators: Validators.email
                }),
                password: new FormControl(null, {
                    validators: [
                        CustomValidators.patternValidator(/\d/, {
                            hasNumber: true
                        }),
                        CustomValidators.patternValidator(/[A-Z]/, {
                            hasCapitalCase: true
                        }),
                        CustomValidators.patternValidator(/[a-z]/, {
                            hasSmallCase: true
                        }),
                        CustomValidators.patternValidator(
                            /[!@#$%^&*()_+{}\[\]:;<>,.?~]/,
                            { hasSpecialCharacters: true }
                        )
                    ]
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
        this.service
            .signup({
                email: this.f['email'].value,
                password: this.f['password'].value
            })
            .subscribe({
                next: () => {
                    this.toastr.success('User added successfully', 'Success');

                    this.signupForm.reset();
                    this.router.navigate(['login']);
                },
                error: e => {
                    let errorMessage = 'Something went wrong';

                    if (e.error) {
                        errorMessage = e.error;
                    }

                    this.toastr.error(errorMessage, 'Error');
                }
            });
    }

    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    togglePasswordConfirmationVisibility() {
        this.isPasswordConfirmationVisible =
            !this.isPasswordConfirmationVisible;
    }
}
