import { Injectable } from '@angular/core';
import {Usuario,Usuariologin,usuariomomentanio} from './../interfaces/usuario';
import {Producto,listaProducto} from './../interfaces/producto';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServService {
public apiAgregarUsuario: 'https://dummyjson.com/users/add';
public apiLogearse: 'https://dummyjson.com/auth/login';
public apiListProducto: 'https://dummyjson.com/auth/products?skip=0';
public apiObtenerInfoProd: 'https://dummyjson.com/auth/products/';


  constructor() { }

}
