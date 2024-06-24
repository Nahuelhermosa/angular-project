import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  template: `
    <form>
      <input type="search" placeholder="filter by products" #filter>
    </form>
  `,
  styleUrls: ['./filter.component.css'] // Corrige el typo aquí
})
export class FilterComponent {

}
