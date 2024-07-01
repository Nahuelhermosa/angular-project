import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilterComponent, FooterComponent], // Agrega FooterComponent aquí
  template: `
    <header class="logo">
      <img src="logo2.png" alt="" srcset="">
    </header>
    <!-- Utiliza el selector del FilterComponent correctamente -->
    <main>
      <router-outlet></router-outlet>
    </main> 
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = FilterComponent;
}
