import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Para mostrar erros ao usuário

  constructor(private authService: AuthService) { }

  login() {
    this.authService.authenticate(this.email, this.password).subscribe(
      response => {
        console.log('Success:', response);
        // Aqui você pode lidar com a resposta da API (armazenar token, redirecionar, etc.)
      },
      error => {
        this.errorMessage = 'Erro na autenticação. Verifique suas credenciais.'; // Captura erro para mostrar ao usuário
        console.error('Error:', error);
      }
    );
  }
}

// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage {
//   email: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login() {
//     this.authService.login(this.email, this.password).subscribe({
//       next: (response) => {
//         // Sucesso - Redirecionar para a tela home
//         this.router.navigate(['/home']);
//       },
//       error: (error) => {
//         // Exibir mensagem de erro
//         this.errorMessage = 'Login inválido. Por favor, verifique suas credenciais.';
//       }
//     });
//   }
// }