import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { FormControl,FormGroup,Validators ,ReactiveFormsModule  } from '@angular/forms';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  imports: [IonicModule,ReactiveFormsModule],
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  });

  constructor(private router:Router,private alertController:AlertController) { }

  navegar(){

    let setData: NavigationExtras = {
      state: {
        id: this.usuario.value.user,
        pass: this.usuario.value.pass
      }
    };

     const loginMap: { [key: string]: string } = {
         'doce:1234': '/home-docente',
         'estu:1234': '/home-estudiante'
       };

       const userPassKey = `${this.usuario.value.user}:${this.usuario.value.pass}`;

       if (loginMap[userPassKey]) {
         this.router.navigate([loginMap[userPassKey]], setData);
       } else {
         this.presentAlert("Error Login", "Usuario o la contraseña son incorrectos");
       }   
  }

  async presentAlert(titulo:string, mensaje:string) {
    const alert = await this.alertController.create({
      subHeader: titulo,
      message:  mensaje,
      buttons: ['Deshacer'],
    });
    await alert.present();
  }

  ngOnInit() {
  }
}