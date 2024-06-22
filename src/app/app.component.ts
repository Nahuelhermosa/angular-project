import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `

 <header class="header-name">
  <img 
  class="first-logo"
  src="/assets/logo1.png" 
  alt="logo"
  aria-hidden="true"
  routerLink="/"
  />
  <h1>titulo de la tienda</h1>
 </header>

 <main>

<router-outlet></router-outlet>

 </main>
 <footer>
  <h1>este es el footer</h1>
 </footer>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
