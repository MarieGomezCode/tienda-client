import { Injectable } from '@angular/core';//Esto es de Angular.
//@Injectable le dice a Angular que esta clase es un servicio, lo que significa que se puede inyectar en otros componentes.

//Injectable: Es un decorador de Angular que marca la clase como un servicio que puede ser inyectado en otros componentes o servicios.
import { HttpClient } from '@angular/common/http';//es de Angular.->	Nos permite hacer peticiones HTTP.
//HttpClient: Es un servicio de Angular que permite hacer peticiones HTTP (GET, POST, PUT, DELETE) a un servidor.
import { Observable } from 'rxjs';//Nos permite manejar datos asincrónicos.
/*
  rxjs es una librería externa que Angular usa para manejar datos asincrónicos.
Observable nos permite manejar datos que pueden cambiar con el tiempo (como una respuesta HTTP).
*/
import { Producto } from '../models/producto';
/*
  Esto es TypeScript puro.
Importamos un modelo Product, que probablemente es una interfaz o clase que define la estructura de un producto (por ejemplo: id, name, price).
*/

/*
HttpClient es una herramienta que nos permite hacer peticiones HTTP (como GET, POST, PUT, DELETE) a un servidor.
/*
  que se encarga de comunicarse con un backend (en este caso, un API en http://localhost:8080/api/products)
  para obtener información sobre productos.
*/
//providedIn: 'root': Indica que el servicio estará disponible en toda la aplicación (es decir, es un singleton).
// Angular se encarga de crear una única instancia del servicio y compartirla con todos los componentes que lo necesiten.
@Injectable({
  //	Hace que el servicio esté disponible en toda la app.
  providedIn: 'root'
  /*
      Esto es de Angular.
Indica que este servicio puede ser usado en toda la aplicación sin necesidad de importarlo en un módulo.
Básicamente, Angular se encarga de crearlo y compartirlo con quien lo necesite.
  */
})
export class ProductoService { //Esto es TypeScript.
  //La palabra export significa que podemos importar esta clase en otros archivos.
  /*
  Creamos una clase llamada ProductService para manejar la lógica de comunicación con el backend.
  */
  private miRutaCarnal = 'http://localhost:8080/api/productos'; //Esto es TypeScript.
  /*
  Definimos una variable privada llamada apiUrl.
  private significa que solo esta clase puede acceder a esta variable.
  Almacena la URL de la API donde obtenemos los productos.
  */

  //Constructor e Inyección de Dependencias
  //Angular maneja esto con Dependency Injection
  constructor(private http: HttpClient) { }
  //Angular nos inyecta automáticamente una instancia de HttpClient.
//Así podemos hacer peticiones HTTP sin necesidad de instanciar HttpClient manualmente.
//	Devuelve una lista de productos desde la API.
    obtenerProductos():Observable<Producto[]>{
      return this.http.get<Producto[]>(this.miRutaCarnal);
    }
    /*
        getProducts(): Observable<Product[]>
    Esto es TypeScript.
    Devuelve un Observable<Product[]>, lo que significa que esperamos recibir una lista de productos de la API.
    */
   /*
    Esto es Angular.
  this.http.get<Product[]>(this.apiUrl)
  Hace una petición HTTP GET a la URL de nuestra API.
  Le decimos que la respuesta será un array de Product (Product[]).
  Como es un Observable, podemos suscribirnos a él en un componente para recibir la lista de productos.
   */

  obtenerProductoId(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.miRutaCarnal}/${id}`);
  }
  /*
    getProductById(id: number): Observable<Product>
    Esto es TypeScript.
    id: number significa que este método recibe un número como parámetro.
    Retorna un Observable<Product>, es decir, un solo producto en vez de una lista.
  */
 /*
    return this.http.get<Product>(\${this.apiUrl}/${id}`);`

      Esto es Angular.
      this.http.get<Product>(\${this.apiUrl}/${id}`)`:
      Hace una petición GET a la API, agregando el id a la URL.
      Si id = 3, la petición se haría a http://localhost:8080/api/products/3.
 */
      crearProducto(producto:Producto):Observable<Producto>{
        return this.http.post<Producto>(this.miRutaCarnal,producto);
      }

}


/*
    ¿Por qué usamos un servicio?

Mantiene la lógica separada del componente.
Reutilizable en toda la aplicación.
Usa HttpClient para hacer peticiones HTTP de forma sencilla.
*/

/*
  ¿Por qué Usar un Servicio?
  Separación de Responsabilidades:
  El servicio maneja la lógica de comunicación con el backend, mientras que los componentes se encargan de la interfaz de usuario.
  Reutilización:
  El servicio puede ser usado en múltiples componentes sin duplicar código.
  Mantenibilidad:
  Si la API cambia, solo necesitas modificar el servicio, no todos los componentes.
  Testabilidad:
  Los servicios son fáciles de probar con pruebas unitarias.

*/

