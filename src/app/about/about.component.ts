import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="header">
      <button class="home-button" routerLink="/home">Inicio</button>
    </div>
    <div class="form-container">
      <div class="form-card-container">
        <form [formGroup]="registerForm" (ngSubmit)="handleSubmit()">
          <label class="descripcion">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" formControlName="firstName" placeholder="First Name" />
            <span class="alert" [hidden]="firstName.valid || firstName.untouched">
              First name is required
            </span>
          </label>

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

        <div *ngIf="product" class="product-card">
          <h2>{{ product.title }}</h2>
          <h2> $ {{ product.price }}</h2>
          <img [src]="product.image" alt="{{ product.title }}" />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')
    ]),
    password: new FormControl('', Validators.required),
  });

  product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // '+' converts string to number
      if (productId) {
        this.loadProduct(productId);
      } else {
        this.loadRandomProduct();
      }
    });
  }

  get firstName() {
    return this.registerForm.get('firstName') as FormControl;
  }

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

  loadProduct(productId: number) {
    this.productService.getAllProducts().subscribe(products => {
      this.product = products.find(p => p.id === productId);
    });
  }

  loadRandomProduct() {
    this.productService.getAllProducts().subscribe(products => {
      const randomIndex = Math.floor(Math.random() * products.length);
      this.product = products[randomIndex];
    });
  }
}
