import { NgModule, LOCALE_ID } from '@angular/core'; // 🛠 Importamos LOCALE_ID
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { InicioComponent } from './inicio/inicio.component'; // 🇨🇴 Importa la configuración para Colombia
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeEsCo); // Aplica español de Colombia

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    DetallesProductoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' } // 🇨🇴 Establece español de Colombia
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
