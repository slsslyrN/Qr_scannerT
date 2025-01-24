import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html', 
  standalone:true,
  styleUrls: ['./camera.page.scss'],
  imports: [IonicModule]
})
export class CameraPage implements OnInit {

  clase: string = "";
  id: string = "";
  horario: string = "";

  constructor(private router: Router) {
    this.clase = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
    this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
    this.horario = this.router.getCurrentNavigation()?.extras.state?.['horario'];
  }

  ngOnInit() {
  }

  
  regresarHomeEstudiante() {
    this.router.navigate(['/home-estudiante']);
  }
}
