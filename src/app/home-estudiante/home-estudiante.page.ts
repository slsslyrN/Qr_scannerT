import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.page.html',
  styleUrls: ['./home-estudiante.page.scss'],
  imports: [IonicModule]
})
export class HomeEstudiantePage implements OnInit {

  clase1:string="Programación de aplicaciones móviles"
  id1:string="PGY4121"
  horario1:string="19:00 - 22:30"

  constructor(private router:Router) { }

  navegar1(){
      let courseData:NavigationExtras = {
        state: {
          nombre: this.clase1,
          id: this.id1,
          horario: this.horario1
        }
      }
      this.router.navigate(["/camera"],courseData)
    }

  ngOnInit() {
  }

}