// filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  template: `
    <form (submit)="filterResults(filter.value); $event.preventDefault()">
      <input
        type="search" 
        placeholder="Filter by products" 
        #filter
      />
      <button type="submit" class="primary">Search</button>
    </form>
  `,
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() products: any[] = [];
  @Output() filteredProducts = new EventEmitter<any[]>();

  filterResults(value: string) {
    const filtered = this.products.filter(product => 
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    this.filteredProducts.emit(filtered);
  }
}
