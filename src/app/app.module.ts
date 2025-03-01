import { NgModule, LOCALE_ID } from '@angular/core'; // 🛠 Importa NgModule y LOCALE_ID para configurar el idioma
import { BrowserModule } from '@angular/platform-browser'; // 🛠 Importa el módulo para aplicaciones web
import { FormsModule } from '@angular/forms'; // 🛠 Importa el módulo para formularios
import { AppRoutingModule } from './app-routing.module'; // 🛠 Importa el módulo de enrutamiento
import { AppComponent } from './app.component'; // 🛠 Importa el componente principal
import { ListaProductosComponent } from './lista-productos/lista-productos.component'; // 🛠 Importa el componente de lista de productos
import { registerLocaleData } from '@angular/common'; // 🛠 Importa la función para registrar configuraciones regionales
import localeEsCo from '@angular/common/locales/es-CO'; // 🛠 Importa la configuración regional para Colombia
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component'; // 🛠 Importa el componente de detalles de producto
import { InicioComponent } from './inicio/inicio.component'; // 🛠 Importa el componente de inicio
import { HttpClientModule } from '@angular/common/http'; // 🛠 Importa el módulo para hacer solicitudes HTTP

registerLocaleData(localeEsCo); // 🛠 Registra la configuración regional para Colombia

@NgModule({
  declarations: [
    AppComponent, // 🛠 Declara el componente principal
    ListaProductosComponent, // 🛠 Declara el componente de lista de productos
    DetallesProductoComponent, // 🛠 Declara el componente de detalles de producto
    InicioComponent // 🛠 Declara el componente de inicio
  ],
  imports: [
    BrowserModule, // 🛠 Importa el módulo para aplicaciones web
    AppRoutingModule, // 🛠 Importa el módulo de enrutamiento
    HttpClientModule, // 🛠 Importa el módulo para hacer solicitudes HTTP
    FormsModule // 🛠 Importa el módulo para formularios
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' } // 🛠 Configura el idioma predeterminado a español de Colombia
  ],
  bootstrap: [AppComponent] // 🛠 Define el componente principal que se inicia al cargar la aplicación
})
export class AppModule { } // 🛠 Define la clase del módulo principal
