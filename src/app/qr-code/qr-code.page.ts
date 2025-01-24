import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
  imports: [IonicModule]
})
export class QrCodePage implements OnInit {

  clase:string = ""
  id:string = ""
  horario:string = ""

  constructor(private router:Router) { 
    this.clase = this.router.getCurrentNavigation()?.extras.state?.['nombre']
    this.id = this.router.getCurrentNavigation()?.extras.state?.['id']
    this.horario = this.router.getCurrentNavigation()?.extras.state?.['horario']
  }

  

  ngOnInit() {
  }

}
