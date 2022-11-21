import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioServService } from '../../servicios/usuario-serv.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public formularioRegistro: FormGroup;
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    private apiUsuario: UsuarioServService,) {
    this.crearFormularioUsuario();
    this.formularioRegistro = this.fb.group({
      'firstName': new FormControl("", Validators.required),
      'lastName': new FormControl("", Validators.required),
      'age': new FormControl("", Validators.required),
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'birthDate': new FormControl("", Validators.required),
      'gender': new FormControl("", Validators.required),

    })}

    ngOnInit() {
    }

    public crearFormularioUsuario() {
      this.formularioRegistro = this.fb.group({
        nombre_usuario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        pass: new FormControl(0, [Validators.required, Validators.minLength(20), Validators.maxLength(30)]),
        admin: new FormControl(false, [Validators.required])
      })
    }

    public guardarDatos() {
      if (this.formularioRegistro.invalid) {
        this.formularioRegistro.markAllAsTouched();
        return;
      }
      this.apiUsuario.agregarUsuario({
        ...this.formularioRegistro.value
      })
        .subscribe(data => {
          this.router.navigate(['login']);

        })
    }
}

