import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private authenticated = false;
  private userInfo: any = null;  // Para almacenar los datos del usuario autenticado
  private apiUrl = 'http://localhost:5000'; // URL de tu API

  constructor(private http: HttpClient) { }

  // Verifica si el usuario está autenticado
  isLoggedin(): boolean {
    return this.authenticated;
  }

  // Inicia sesión en la aplicación y guarda la información del usuario
  login(user: string, password: string): Observable<any> {
    return new Observable(observer => {
      // Realizamos una llamada a la API para verificar las credenciales
      this.http.post<any>(`${this.apiUrl}/login`, { user, password })
        .subscribe(
          (response) => {
            // Si la respuesta es exitosa, marcamos al usuario como autenticado
            this.authenticated = true;
            this.userInfo = response;  // Guardamos los datos del usuario (id, tipoPerfil, etc.)
            observer.next(response);  // Emitimos la respuesta
            observer.complete();
          },
          (error) => {
            // Si ocurre un error, retornamos como no autenticado
            this.authenticated = false;
            this.userInfo = null;
            observer.error(error);  // Emitimos el error
          }
        );
    });
  }

  // Cierra sesión y limpia los datos del usuario
  logout(): void {
    this.authenticated = false;
    this.userInfo = null;
  }

  // Obtiene la información del usuario autenticado
  getUserInfo() {
    return this.userInfo;
  }
}
