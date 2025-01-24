import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumoApiService {
  private apiUrl = 'http://localhost:5000'; // URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener los cursos de un profesor por su ID
  obtenerCursosProfesor(profesorId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profesores/${profesorId}/cursos`);
  }

  // Método para obtener los alumnos de un curso de un profesor específico
  obtenerAlumnosCurso(profesorId: number, cursoId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos`
    );
  }

  // Método para autenticar un usuario (login)
  login(usuario: string, contraseña: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      user: usuario,
      password: contraseña,
    });
  }
}
