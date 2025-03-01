import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
 private contador = new BehaviorSubject<number>(0);
  contador$ = this.contador.asObservable();
  constructor() { }
  incrementar(){
    this.contador.next(this.contador.value + 1);
  }

  obtenerContador(){
    return this.contador.value;
  }
}
