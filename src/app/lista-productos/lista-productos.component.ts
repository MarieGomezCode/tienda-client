import { Component, OnInit } from '@angular/core';
/*
  Component: Convierte esta clase en un componente de Angular (es decir, una parte visual de la app).
  OnInit: Es una interfaz especial de Angular que se ejecuta cuando el componente se inicia.
*/
import { Producto } from '../models/producto'; //Es el modelo de un producto (probablemente tiene id, name, price, etc.).
import { ProductoService } from '../services/producto.service'; //Traemos el servicio que maneja las peticiones HTTP a la API.
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-lista-productos', //Define cómo se usará este componente en HTML.Es su nombre en el juego.
  templateUrl: './lista-productos.component.html', //Es su apariencia en pantalla.
  styleUrls: ['./lista-productos.component.css']//Es su ropa y accesorios.
})
/*
ProductListComponent → Es el nombre de la clase (siguiendo el estándar de Angular).
implements OnInit → Indica que esta clase usará el método ngOnInit() para inicializar datos cuando el componente se cargue.
*/
export class ListaProductosComponent implements OnInit {
  contador =0;
  //products → Es una variable que almacenará la lista de productos.
  productos: Producto[] = [];//Product[] → Es un array de objetos Product.
  //= []; → La inicializamos vacía hasta que la API nos devuelva datos.
  constructor(private manipularservice: ProductoService,
              private ContadorService: ContadorService
  ){}
  /*
  constructor(private productService: ProductService) {}
private productService: Inyecta el servicio ProductService en esta clase.
Así podemos usar this.productService para pedir productos a la API.
  */

//Se ejecuta automáticamente cuando el componente se carga.
  ngOnInit(): void { //Aquí es donde llamamos a la API para obtener productos.
    // La palabra data en .subscribe((data) => { ... }) no es de Angular ni de TypeScript, simplemente es una variable que estamos declarando en la función de flecha (=>).
    this.manipularservice.obtenerProductos().subscribe((data) =>{
      this.productos=data;
      /*
        Llamada a la API para obtener productos

      this.productService.getProducts() → Llama al método que obtiene la lista de productos.
      .subscribe((data) => { ... })
      subscribe() espera a que la API devuelva datos y luego los usa.
      data es la lista de productos recibida.
      this.products = data; → Guarda la lista en this.products para que se muestre en la pantalla.
      */

    // 🟢 Suscribirse al contador para que actualice la vista
    this.ContadorService.contador$.subscribe(valor => {
      this.contador = valor;
    });
    })
  }
  agregar(){
      this.ContadorService.incrementar();
  }
}



/*
  ProductService es como el cocinero 👨‍🍳 (pide los ingredientes a la API).
Product es la receta 📜 (define qué ingredientes tiene un producto).

*/
