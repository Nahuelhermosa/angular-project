import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>Registro</h1>
    <form class="contenedor" (ngSubmit)="handleSubmit()">
      <label class="descripcion">
        Email:
        <input type="text" placeholder="nahuelman@mail.com" name="email" />
      </label>
      <label class="descripcion">
        Password:
        <input type="password" placeholder="keep your password secure" name="password"/>
      </label>
      <button type="submit">Register</button>
    </form>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  handleSubmit() {
    // Implementa la lógica del submit aquí
  }
}
