import { Injectable } from '@angular/core';
import {Usuario,Usuariologin,UsuarioParcial} from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServService {
public apiAgregarUsuario: 'https://dummyjson.com/users/add';
public apiLogearse: 'https://dummyjson.com/login';
private paginaActual = 0;
private comportamientoListarUsuario = new BehaviorSubject<Array<any>>([]);
public listarUsers$ = this.comportamientoListarUsuario.asObservable();
  constructor(private usuarios : HttpClient) { }

  public agregarUsuario(nuevoUsuario : Usuario): Observable<any>{
    return this.usuarios.post(this.apiAgregarUsuario, nuevoUsuario,{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
  public listarUsuarios(){
    this.usuarios.get<Array<any>>(`${this.apiLogearse}?_page=1&_limit=5`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comportamientoListarUsuario.next(datos);
    })
  }
  public inicioSesion(){
    this.usuarios.get<Array<Usuario>>(`${this.apiLogearse}?_page=1&_limit=5`)
    .subscribe(datos => {this.comportamientoListarUsuario.next(datos)})
  }
}
