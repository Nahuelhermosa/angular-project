import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
   <footer class="footer">
  <div class="left-content">
    &copy; Copyright 2024
    <p>Calle 20, Piso 1, CP 1886,</p>
  
    
  </div>
  <div class="right-content">
    <a href="mailto:nahuel_pro_517@hotmail.com" class="contact">
    Contact us 
      <img src="sobre.png" alt="Correo electrónico" class="icono2" />
    </a>
  </div>
</footer>

  `,
  styleUrls: ['./footer.component.css'] // Corrige el nombre aquí
})
export class FooterComponent { }
