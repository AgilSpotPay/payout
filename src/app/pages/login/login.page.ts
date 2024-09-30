import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        // Sucesso - Redirecionar para a tela home
        this.router.navigate(['/home']);
      },
      error: (error) => {
        // Exibir mensagem de erro
        this.errorMessage = 'Login inválido. Por favor, verifique suas credenciais.';
      }
    });
  }

  ngOnInit() {
  }
}