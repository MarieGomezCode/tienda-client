import { Component } from '@angular/core'; // 🛠 Importa el decorador "Component" de Angular
import { Producto } from '../models/producto'; // 🛠 Importa la interfaz o clase "Producto"
import { ProductoService } from '../services/producto.service'; // 🛠 Importa el servicio "ProductoService"

@Component({
  selector: 'app-inicio', // 🛠 Selector del componente (se usa en el HTML como <app-inicio>)
  templateUrl: './inicio.component.html', // 🛠 Ruta del archivo HTML del componente
  styleUrls: ['./inicio.component.css'] // 🛠 Ruta del archivo CSS del componente
})
export class InicioComponent {

  // 🛠 Objeto "nuevoProducto" que se vincula con el formulario
  nuevoProducto: Producto = {
    nombre: '', // 🛠 Propiedad "nombre" inicializada como cadena vacía
    descripcion: '', // 🛠 Propiedad "descripcion" inicializada como cadena vacía
    precio: 0 // 🛠 Propiedad "precio" inicializada como 0
  };

  // 🛠 Inyección del servicio "ProductoService" en el constructor
  constructor(private maniservice: ProductoService) { }

  // 🛠 Método para agregar un nuevo producto
  agregarProducto() {
    this.maniservice.crearProducto(this.nuevoProducto).subscribe({
      next: (productoCreado) => { // 🛠 Callback para manejar la respuesta exitosa
        console.log('Producto creado:', productoCreado); // 🛠 Muestra el producto creado en la consola
        alert('Producto creado'); // 🛠 Muestra una alerta al usuario
      },
      error: (error) => { // 🛠 Callback para manejar errores
        console.error('Error al crear producto:', error); // 🛠 Muestra el error en la consola
        alert('Error al crear producto'); // 🛠 Muestra una alerta al usuario
      }
    });
  }
}


/*
.subscribe({...}): Aquí entra en juego RxJS, una librería que Angular usa para manejar operaciones asíncronas (como solicitudes HTTP). subscribe permite "escuchar" los eventos que emite el Observable.
Se subscribe al Observable devuelto por crearProducto. Esto significa que el código espera una respuesta asíncrona (como el resultado de una solicitud HTTP).

next: (productoCreado) => {...}: Este callback se ejecuta cuando el Observable emite un valor exitoso (en este caso, el producto creado). El parámetro productoCreado contendrá los datos devueltos por el backend.

error: (error) => {...}: Este callback se ejecuta si ocurre un error (por ejemplo, si la solicitud HTTP falla). El parámetro error contendrá detalles sobre el fallo.

Nota: También existe un tercer manejador opcional, complete, que se ejecutaría cuando el Observable finaliza, pero no se usa aquí.

¿De dónde vienen next y error?

Son parte de RxJS, una librería externa integrada en Angular para manejar flujos de datos asíncronos. No son nativos de TypeScript ni de JavaScript puro, sino una abstracción poderosa para trabajar con eventos asíncronos.

subscribe: Método de RxJS para escuchar eventos de un Observable (como respuestas HTTP).

next: Maneja el caso exitoso (el producto se creó).

error: Maneja el caso de fallo (algo salió mal en la creación).

Este código es un ejemplo típico de Angular: un componente que interactúa con un servicio para enviar datos al backend, usando TypeScript para tipado y RxJS para asincronía.



*/
