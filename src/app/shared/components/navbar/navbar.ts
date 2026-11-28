import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
    // Indica si el menú móvil está abierto o cerrado.
    menuOpen: boolean = false;

    // Alterna el estado del menú.
    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    // Cierra el menú al seleccionar una opción.
    closeMenu(): void {
        this.menuOpen = false;
    }

}
