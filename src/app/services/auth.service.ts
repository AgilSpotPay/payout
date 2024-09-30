import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://www.hub.admspot.com/cafeapi/me'; // URL da API

  constructor(private http: HttpClient) { }

  // Método para autenticar o usuário
  authenticate(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'email': 'cesar@agilspotpay.com.br',
      'password': 'ab31hgTT!',
      // 'Cookie': 'PHPSESSID=4aaef4124768e117535824342e6593fd'
    });

    // Enviando a requisição GET com os cabeçalhos
    return this.http.get(this.apiUrl, {
      headers: headers,
      withCredentials: true, // Enviar cookies e credenciais
      observe: 'body'        // Observa apenas o corpo da resposta
    })
      .pipe(
        catchError((error) => {
          console.error('Error in login request:', error);
          return throwError(() => new Error('Login failed'));
        })
      );
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService {
//   private apiUrl = 'https://hub.admspot.com/cafeapi/me';

//   constructor(private http: HttpClient) { }

//   login(email: string, password: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'email': email,
//       'password': password,
//       'Content-Type': 'application/json'
//     });

//     return this.http.get(this.apiUrl, {
//       headers: headers,
//       withCredentials: true  // Certifique-se de que as credenciais estão sendo enviadas
//     })
//     .pipe(
//       catchError((error) => {
//         console.error('Error in login request:', error);
//         return throwError(() => new Error('Login failed'));
//       })
//     );
//   }
// }
