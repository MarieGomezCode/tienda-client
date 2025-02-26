import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  producto: Producto | undefined;
  constructor(
    private router: ActivatedRoute,
    private productoService: ProductoService
  ){}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.productoService.obtenerProductoId(id).subscribe((data) => {
      this.producto = data;
    });
  }
  

}
