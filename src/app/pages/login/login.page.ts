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
//   errorMessage: string = ''; // Para mostrar erros ao usuário

//   constructor(private authService: AuthService) { }

//   login() {
//     this.authService.authenticate(this.email, this.password).subscribe(
//       response => {
//         console.log('Success:', response);
//         // Aqui você pode lidar com a resposta da API (armazenar token, redirecionar, etc.)
//       },
//       error => {
//         this.errorMessage = 'Erro na autenticação. Verifique suas credenciais.'; // Captura erro para mostrar ao usuário
//         console.error('Error:', error);
//       }
//     );
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss']
// })
// export class LoginPage {
//   email: string = '';
//   password: string = '';
//   errorMessage: string = ''; // Declarando a variável para armazenar a mensagem de erro

//   constructor(private authService: AuthService, private router: Router) { }

//   // Método para lidar com o login
//   async onLogin() {
//     try {
//       const response = await this.authService.login(this.email, this.password);
//       console.log('Login bem-sucedido:', response);
//       // Navegar para a página home após login bem-sucedido
//       this.router.navigate(['/home']);
//     } catch (error: any) {
//       const errorMessage = error?.message ?? 'Erro desconhecido ao fazer login.';
//       console.error('Erro ao fazer login:', errorMessage);
//       // Definindo a mensagem de erro para exibir na interface
//       this.errorMessage = errorMessage;
//     }
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // ajuste o caminho conforme necessário
import { Router } from '@angular/router'; // Para navegação após login

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null; // Para exibir mensagens de erro

  constructor(private authService: AuthService, private router: Router) { }

  // Método chamado ao submeter o formulário
  async onLogin() {
    this.errorMessage = null; // Reseta a mensagem de erro antes de tentar login
    try {
      await this.authService.login(this.email, this.password);
      // Redireciona para a página inicial após login bem-sucedido
      this.router.navigate(['/home']); // ajuste o caminho conforme necessário
    } catch (error: any) {
      this.errorMessage = error.message; // Define a mensagem de erro para exibição
      console.error('Erro ao fazer login:', error);
    }
  }
}
