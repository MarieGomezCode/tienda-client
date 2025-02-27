import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  nuevoProducto: Producto = {

    nombre:'',
    descripcion:'',
    precio:0,
  }
  constructor(private maniservice:ProductoService) { }

    agregarProducto(){
      this.maniservice.crearProducto(this.nuevoProducto).subscribe({
        next: (productoCreado) => {
          console.log('Producto creado:', productoCreado);
          alert('Producto creado');
        },
        error: (error) => {
          console.error('Error al crear producto:', error);
          alert('Error al crear producto');
        }
      });
    }
}
