import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { ConsumoApiService } from '../services/consumoapi.service'; 
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FormsModule],  // Añadimos CommonModule y FormsModule
  styleUrls: ['./home-docente.page.scss'],
})
export class HomeDocentePage implements OnInit {
  user: string = '';
  profesorId: number = 1; 

  cursos: any[] = []; 

  constructor(private router: Router, private consumoApi: ConsumoApiService) {}

  ngOnInit() {
    this.consumoApi.obtenerCursosProfesor(this.profesorId).subscribe((data) => {
      this.cursos = data;
    });
  }

  navegar(curso: any) {
    let courseData: NavigationExtras = {
      state: {
        nombre: curso.nombre,
        id: curso.codigo,
        horario: curso.seccion, 
      },
    };
    this.router.navigate(['/qr-code'], courseData);
  }
}
