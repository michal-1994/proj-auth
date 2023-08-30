import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password')?.value;
        const passwordConfirmation: string = control.get('passwordConfirmation')
            ?.value;
        if (password !== passwordConfirmation) {
            control
                .get('passwordConfirmation')
                ?.setErrors({ noPassswordMatch: true });
        }
    }
}
