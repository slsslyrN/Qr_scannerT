import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  imports: [IonicModule, ReactiveFormsModule],
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  constructor(private router: Router, private alertController: AlertController, private authService: AuthServiceService) { }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier dato si lo necesitas
  }

  navegar() {
    if (this.usuario.invalid) {
      this.presentAlert("Error Login", "Por favor ingrese un usuario y una contraseña válidos.");
      return;
    }

    const usuarioData = this.usuario.value;

    // Garantizar que user y pass son cadenas de texto no vacías
    const user = usuarioData.user ?? '';  // Usamos el operador de coalescencia nula para asignar un valor vacío si es null o undefined
    const pass = usuarioData.pass ?? '';  // Lo mismo para pass

    if (!user || !pass) {
      this.presentAlert("Error Login", "Por favor ingrese un usuario y una contraseña válidos.");
      return;
    }

    // Llamamos al servicio de autenticación con las credenciales
    this.authService.login(user, pass).subscribe(
      (response) => {
        // Suponiendo que la respuesta es algo como { id, tipoPerfil }
        const { id, tipoPerfil } = response;

        // Establecemos los datos para la navegación
        let setData: NavigationExtras = {
          state: { id, pass: pass }
        };

        // Navegamos según el tipo de perfil (1 = docente, 2 = estudiante)
        if (tipoPerfil === 1) {
          this.router.navigate(['/home-docente'], setData);  // Navegar al home-docente
        } else if (tipoPerfil === 2) {
          this.router.navigate(['/home-estudiante'], setData);  // Navegar al home-estudiante
        } else {
          this.presentAlert("Error Login", "Perfil no válido.");
        }
      },
      (error) => {
        // Manejo de error en el login
        if (error.status === 401) {
          this.presentAlert("Error Login", "Usuario o la contraseña son incorrectos.");
        } else {
          this.presentAlert("Error", "Hubo un error al intentar realizar el login.");
        }
      }
    );
  }

  // Método para mostrar alertas
  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      subHeader: titulo,
      message: mensaje,
      buttons: ['Deshacer'],
    });
    await alert.present();
  }
}
