import { ChangePasswordValidators } from './../change-password.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl('',
      [
        Validators.required,
        // ChangePasswordValidators.checkOldPassword
      ],
      [
        ChangePasswordValidators.checkOldPassword
      ]
    ),

    newPassword: new FormControl('', Validators.required),
    cnfNewPassword: new FormControl('',
      [
        Validators.required,
        ChangePasswordValidators.confirmNewPassword
      ]
    )
  });

  get OldPassword() {
    return this.form.get('oldPassword');
  }

  get NewPassword() {
    return this.form.get('newPassword');
  }

  get CnfNewPassword() {
    return this.form.get('cnfNewPassword');
  }
}
