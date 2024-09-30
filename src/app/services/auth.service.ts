// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'https://hub.admspot.com/cafeapi/me';

//   constructor(private http: HttpClient) { }

//   login(email: string, password: string): Observable<any> {
//     // Criar parâmetros de consulta
//     const params = new HttpParams()
//       .set('email', email)
//       .set('password', password);

//     return this.http.get(this.apiUrl, { params })
//       .pipe(
//         catchError((error) => {
//           console.error('Error during login:', error); // Exibir o erro no console para depuração
//           return throwError(() => new Error('Login failed'));
//         })
//       );
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://hub.admspot.com/cafeapi/me';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    // Adicionando os headers para incluir o email e a senha
    const headers = new HttpHeaders({
      'email': email,
      'password': password
    });

    console.log('EMAIL: ', email, 'SENHA: ', password);

    // Fazendo a requisição GET com os headers
    return this.http.get(this.apiUrl, { headers })
      .pipe(
        catchError((error) => {
          console.error('Erro durante o login:', error);
          return throwError(() => new Error('Login falhou'));
        })
      );
  }
}