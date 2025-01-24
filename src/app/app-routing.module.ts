import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './guards/guard.guard'; // Importa tu guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [guardGuard] // Protege esta ruta con el guard
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./home-docente/home-docente.module').then(m => m.HomeDocentePageModule),
    canActivate: [guardGuard] // Protege esta ruta
  },
  {
    path: 'home-estudiante',
    loadChildren: () => import('./home-estudiante/home-estudiante.module').then(m => m.HomeEstudiantePageModule),
    canActivate: [guardGuard] // Protege esta ruta
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodePageModule),
    canActivate: [guardGuard] // Protege esta ruta
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then(m => m.CameraPageModule),
    canActivate: [guardGuard] // Protege esta ruta
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
