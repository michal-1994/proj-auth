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

    signup() {}
}
