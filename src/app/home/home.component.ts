// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { FilterComponent } from '../filter/filter.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FilterComponent, RouterModule],
  template: `

    <app-filter [products]="products" (filteredProducts)="updateFilteredProducts($event)"></app-filter>
    <a class="button" routerLink="/about"><button>inicio de sesion</button></a>
    <div *ngIf="filteredProducts && filteredProducts.length" class="products-container">
      <div *ngFor="let product of filteredProducts" class="product-card">
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
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data; // Initialize filteredProducts with all products
    });
  }

  updateFilteredProducts(filteredProducts: any[]) {
    this.filteredProducts = filteredProducts;
  }
}
