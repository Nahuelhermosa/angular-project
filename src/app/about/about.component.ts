import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Registro</h1>
    <form [formGroup]="registerForm" (ngSubmit)="handleSubmit()">
      <label class="descripcion">
        Email:
        <input type="text" formControlName="email" placeholder="nahuelman@mail.com" />
        <span class="alert" [hidden]="email.valid || email.untouched">
          Email is required and must be a valid email
        </span>
      </label>
      <label class="descripcion">
        Password:
        <input type="password" formControlName="password" placeholder="keep your password secure" />
        <span class="alert" [hidden]="password.valid || password.untouched">
          Password is required
        </span>
      </label>
      <button type="submit" [disabled]="registerForm.invalid">Register</button>
    </form>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')
    ]),
    password: new FormControl('', Validators.required),
  });

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  handleSubmit() {
    if (this.registerForm.invalid) return;
    const formValue = this.registerForm.value;
    // Implementa la lógica del submit aquí
    console.log('Form Submitted', formValue);
  }
}
