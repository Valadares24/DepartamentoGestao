import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// --- NOVOS IMPORTS ---
import { CommonModule } from '@angular/common'; // Necessário para *ngIf e AsyncPipe
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // Necessário para o guard
import { ToastModule } from 'primeng/toast'; // Necessário para o MessageService
// --- FIM NOVOS IMPORTS ---

@Component({
  selector: 'app-root',
  standalone: true,
  // Atualiza os imports
  imports: [
    RouterOutlet,
    CommonModule, // Adicionado
    [cite_start]HeaderComponent, // Adicionado [cite: 22]
    ConfirmDialogModule, // Adicionado (para o guard)
    ToastModule          // Adicionado (para o MessageService)
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'funcionario-web';
  isAuthenticated$: Observable<boolean>;

  // Injeta o AuthService para saber se deve mostrar o header
  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
}