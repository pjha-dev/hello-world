import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordValidators {
    static checkOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) != 'pranu') {
                    resolve({ checkOldPassword: true });
                    console.log(control.value)
                }
                else
                    resolve(null);
            }, 0);
        });

    }

    static confirmNewPassword(control: AbstractControl): ValidationErrors | null {

        if (control.value != control.parent?.get('newPassword')?.value)
            return { confirmNewPassword: true };

        return null;
    }
}