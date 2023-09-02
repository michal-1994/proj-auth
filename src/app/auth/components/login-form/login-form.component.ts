import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    loginForm!: FormGroup;
    isPasswordVisible: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private readonly service: AuthService,
        private toastr: ToastrService
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
        this.service
            .login({
                email: this.f['email'].value,
                password: this.f['password'].value
            })
            .subscribe({
                next: () => {
                    this.toastr.success('Successfully logged in', 'Success');

                    this.loginForm.reset();
                    this.router.navigate(['dashboard']);
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
}
