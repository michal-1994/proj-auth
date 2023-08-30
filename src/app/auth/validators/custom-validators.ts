import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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

    static patternValidator(
        regex: RegExp,
        error: ValidationErrors
    ): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }

            const valid = regex.test(control.value);

            return valid ? null : error;
        };
    }
}
