// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'https://www.hub.admspot.com/cafeapi/me'; // URL da API

//   constructor(private http: HttpClient) { }

//   // Método para autenticar o usuário
//   authenticate(email: string, password: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'email': 'cesar@agilspotpay.com.br',
//       'password': 'ab31hgTT!',
//       // 'Cookie': 'PHPSESSID=4aaef4124768e117535824342e6593fd'
//     });

//     // Enviando a requisição GET com os cabeçalhos
//     return this.http.get(this.apiUrl, {
//       headers: headers,
//       withCredentials: true, // Enviar cookies e credenciais
//       observe: 'body'        // Observa apenas o corpo da resposta
//     })
//       .pipe(
//         catchError((error) => {
//           console.error('Error in login request:', error);
//           return throwError(() => new Error('Login failed'));
//         })
//       );
//   }
// }

// import { Injectable } from '@angular/core';
// import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private axiosClient: AxiosInstance;

//   constructor() {
//     // Configurando o axios
//     this.axiosClient = axios.create({
//       baseURL: 'https://hub.admspot.com/cafeapi', // URL base da API
//       timeout: 10000, // Timeout de 10 segundos
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   }

//   // Método para login
//   public async login(email: string, password: string): Promise<any> {
//     try {
//       const config: AxiosRequestConfig = {
//         headers: {
//           'email': email,
//           'password': password
//         }
//       };

//       console.log('Configuração da requisição:', config);

//       const response = await this.axiosClient.get('/invoices', config);
//       console.log('Resposta recebida:', response);

//       return response.data; // Retorna os dados da resposta
//     } catch (error: any) {
//       console.error('Erro ao fazer login:', error);

//       if (error.response) {
//         // Verifica se é um erro 400 ou 401
//         if (error.response.status === 400 || error.response.status === 401) {
//           throw new Error(error.response.data.errors.message);
//         }
//       }
//       throw new Error('Erro ao conectar com a API. Verifique sua conexão e tente novamente.');
//     }
//   }
// }

import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private axiosClient: AxiosInstance;

  constructor() {
    // Configurando o axios
    this.axiosClient = axios.create({
      baseURL: 'https://hub.admspot.com/cafeapi', // URL base da API
      timeout: 10000, // Timeout de 10 segundos
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Método para login
  public async login(email: string, password: string): Promise<any> {
    try {
      // Montando os parâmetros da query
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('password', password);

      const config: AxiosRequestConfig = {
        params, // Adicionando os parâmetros à configuração da requisição cesar@agilspotpay.com.br
      };

      console.log('Configuração da requisição:', config);

      // Enviando um GET com as credenciais na URL
      const response = await this.axiosClient.get('/me', config);
      console.log('Resposta recebida:', response);

      // Armazenar credenciais no Local Storage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);

      console.log("NAME: ", response.data);
      return response.data; // Retorna os dados da resposta

    } catch (error: any) {
      console.error('Erro ao fazer login:', error);

      if (error.response) {
        // Verifica se é um erro 400 ou 401
        if (error.response.status === 400 || error.response.status === 401) {
          throw new Error(error.response.data.errors.message);
        }
      }
      throw new Error('Erro ao conectar com a API. Verifique sua conexão e tente novamente.');
    }
  }

  public async getWallets(email: string, password: string): Promise<any> {
    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('password', password);

      const config: AxiosRequestConfig = {
        params,
      };

      const response = await this.axiosClient.get('/wallets', config);
      console.log("NAME: ", response.data.wallets[0]);
      // console.log("NAME: ", response.data.wallets[0].wallet);
      return response.data; // Retorna os dados da resposta
    } catch (error: any) {
      console.error('Erro ao buscar carteiras:', error);
      throw error; // Re-throw para o chamador tratar
    }
  }

  // Método para recuperar credenciais
  public getCredentials() {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');
    return { email, password };
  }


}
