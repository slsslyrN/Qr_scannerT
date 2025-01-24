import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ConsumoApiService } from '../services/consumoapi.service'; 
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  standalone: true,
  imports:[IonicModule,RouterModule],
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  clase: string = "";
  id: string = "";
  horario: string = "";
  alumnoId: number = 1; // Este sería el ID del alumno (debería venir del login o del contexto)
  profesorId: number = 1; // Este sería el ID del profesor que genera el QR

  constructor(private router: Router, private consumoApi: ConsumoApiService) {
    this.clase = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
    this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
    this.horario = this.router.getCurrentNavigation()?.extras.state?.['horario'];
  }

  ngOnInit() {}

  registrarAsistencia() {
    const codigoCurso = this.id;
    const seccion = "013V"; // Este valor también debería estar disponible para el profesor

    const data = {
      alumno_id: this.alumnoId,
      codigo: codigoCurso,
      seccion: seccion,
      fecha: new Date().toISOString(),
    };

    this.consumoApi.registrarAsistencia(data).subscribe((response) => {
      console.log(response);
      alert('Asistencia registrada con éxito');
    }, (error) => {
      console.error(error);
      alert('Error al registrar la asistencia');
    });
  }
}
