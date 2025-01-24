import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  styleUrls: ['./home-docente.page.scss'],
  imports: [IonicModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeDocentePage implements OnInit {

  
  user:string = "";

  clase1:string="Programación de aplicaciones móviles"
  id1:string="PGY4121"
  horario1:string="19:00 - 22:30"

  clase2:string="Programación Web"
  id2:string="PGY4141"
  horario2:string="15:00 - 18:30"

  clase3:string="Fundamentos de programación"
  id3:string="PGY4131"
  horario3:string="11:00 - 14:30"

  constructor(private router:Router) { }

  navegar1(){
    let courseData:NavigationExtras = {
      state: {
        nombre: this.clase1,
        id: this.id1,
        horario: this.horario1
      }
    }
    this.router.navigate(["/qr-code"],courseData)
  }

  navegar2(){
    let courseData:NavigationExtras = {
      state: {
        nombre: this.clase2,
        id: this.id2,
        horario: this.horario2
      }
    }
    this.router.navigate(["/qr-code"],courseData)
  }

  navegar3(){
    let courseData:NavigationExtras = {
      state: {
        nombre: this.clase3,
        id: this.id3,
        horario: this.horario3
      }
    }
    this.router.navigate(["/qr-code"],courseData)
  }
  ngOnInit() {
  }

}
