import { Component, OnInit } from '@angular/core';
import { UsuarioServService } from "./../../servicios/usuario-serv.service"

import { Usuario } from './../../interfaces/usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usurioInicio: Array<any> = [];

  public usuario: Usuario;
  constructor(

  ) { }

  ngOnInit() {

  }




}
