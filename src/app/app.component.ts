import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilterComponent], // Agrega FilterComponent aquí
  template: `
    <header class="logo">
      <img src="logo2.png" alt="" srcset="">
    </header>
    <!-- Utiliza el selector del FilterComponent correctamente -->
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <h1>este es el footer</h1>
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = FilterComponent;
}
