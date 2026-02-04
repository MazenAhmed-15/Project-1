import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 constructor(private _authService: AuthService) {}

  RegisterForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      RPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{3,5}[a-zA-Z]{6,}$/)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
      PhoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/)
      ])
    },
    { validators: this.confirmPasswordValidator }
  );

  confirmPasswordValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('RPassword');
    const confirm = form.get('confirmPassword');

    if (!password || !confirm) return null;

    if (confirm.errors && !confirm.errors['mismatch']) {
      return null;
    }

    if (password.value !== confirm.value) {
      confirm.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      confirm.setErrors(null);
      return null;
    }
  }

  handleSubmit() {
    if (this.RegisterForm.valid) {
      this._authService.register(this.RegisterForm.value);
    } else {
      this.RegisterForm.markAllAsTouched();
    }
  }
}
