import { NgModule } from '@angular/core'; // Esto es de Angular. Permite definir un módulo.
import { RouterModule, Routes } from '@angular/router';///  Esto es de Angular. Sirve para manejar las rutas en la app.
import { InicioComponent } from './inicio/inicio.component';////TypeScript. Importa el componente que queremos usar en la ruta.

const routes: Routes = [ //De TypeScript → Declara una constante routes, que es un array de rutas.
  {path: "inicio", component: InicioComponent} // // Angular. Cuando el usuario vaya a "/inicio", carga el componente InicioComponent.
  ,
  { path: "", redirectTo: "inicio", pathMatch: 'full'} //// Angular. Hace que "inicio" sea la ruta por defecto.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], ////  Angular. Carga las rutas principales con `forRoot()`.
  exports: [RouterModule] // //  Angular. Exporta el módulo para que pueda ser usado en `app.module.ts`.
  /*
    De Angular → RouterModule.forRoot(routes) registra las rutas principales de la aplicación.
ℹ️ Si fueran rutas de un módulo secundario, usaríamos forChild(routes) en lugar de forRoot().
  */
})
export class AppRoutingModule { } //  TypeScript. Define la clase `AppRoutingModule`, que contiene la configuración de rutas.
