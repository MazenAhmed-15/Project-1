import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
       loginForm: FormGroup;

 constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router
) {
  this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
}

onSubmit() {
  if (this.loginForm.valid) {
    const success = this.authService.login(this.loginForm.value);

    if (success) {
      alert('Login successful');
      this.router.navigate(['/']);
    } else {
      alert('Invalid email or password');
    }
  }
}

}
