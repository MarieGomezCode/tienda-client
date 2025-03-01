import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-inicio-lista',
  templateUrl: './inicio-lista.component.html',
  styleUrls: ['./inicio-lista.component.css']
})
export class InicioListaComponent implements OnInit {
  contador = 0;
  constructor(private serviceContador : ContadorService){}


  ngOnInit(): void {
    // 🟢 Suscribirse para recibir cambios en tiempo real
    this.serviceContador.contador$.subscribe(valor => {
      this.contador = valor;
    });
  }
  verContador(){
    this.contador = this.serviceContador.obtenerContador();
  }

}
