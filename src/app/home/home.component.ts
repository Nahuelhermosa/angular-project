import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="products && products.length" class="products-container">
      <div *ngFor="let product of products" class="product-card">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price | currency }}</p>
        <img [src]="product.image" alt="{{ product.title }}" />
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
}
