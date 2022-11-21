import { Injectable } from '@angular/core';
import { Products,ProductoConId, ResultadoPeticion } from './../interfaces/producto';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosServService {

  private API_PRODUCTOS_URL = 'https://dummyjson.com/products '

  private paginaActual = 0;

  private comportamientoListar = new BehaviorSubject<Array<Products>>([]);

  public listarProductos$: Observable<Array<Products>> = this.comportamientoListar.asObservable();

  private comportamientoListarUsuario = new BehaviorSubject<Array<any>>([]);
  public listarUsers$ = this.comportamientoListarUsuario.asObservable();

  constructor(
    private http : HttpClient
  ) { }



  public obtenerPrimeros20(){
    this.http.get<ResultadoPeticion>(this.API_PRODUCTOS_URL)
    .subscribe((resultado)=>{
      this.paginaActual = this.paginaActual + 1;
      this.comportamientoListar.next(this.comportamientoListar.getValue().concat(resultado.products));
    })
  }


  public obtenerSiguientes(){
    this.http.get<ResultadoPeticion>(this.API_PRODUCTOS_URL)
    .subscribe((resultado)=>{
      this.paginaActual =this.paginaActual + 1;

      this.comportamientoListarUsuario.next(this.comportamientoListar.getValue().concat(resultado.products));
    })
  }







  public buscarPorId(id :number): Observable<ProductoConId>{
    return this.http.get<any | null>(`${this.API_PRODUCTOS_URL}/${id}`);
  }

  public eliminaPorId(id: number): Observable<any>{
    return this.http.delete(`${this.API_PRODUCTOS_URL}/${id}`);
  }




}
