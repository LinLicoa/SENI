import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private router: Router) {}  // Inyectar el Router en el constructor

  onSidenavClose() {
    this.drawer.close();
  }

  goHome() {
    this.router.navigate(['/']);  // Definir el método goHome
  }
}
