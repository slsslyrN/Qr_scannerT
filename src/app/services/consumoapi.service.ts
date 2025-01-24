import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumoApiService {
  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) {}

  obtenerCursosProfesor(profesorId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profesores/${profesorId}/cursos`);
  }

  obtenerAlumnosCurso(profesorId: number, cursoId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profesores/${profesorId}/cursos/${cursoId}/alumnos`);
  }

  login(usuario: string, contraseña: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      user: usuario,
      password: contraseña,
    });
  }

  registrarAsistencia(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar_asistencia`, data);
  }
}
