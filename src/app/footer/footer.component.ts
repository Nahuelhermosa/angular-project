import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class='footer'>
      &copy; Copyright 2023
      <p>Calle 20, Piso 1, CP 1886, CABA</p>
    </footer>
  `,
  styleUrls: ['./footer.component.css'] // Corrige el nombre aquí
})
export class FooterComponent { }
