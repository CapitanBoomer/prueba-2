import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosServService } from './../../servicios/productos-serv.service';
import { ResultadoPeticion } from './../../interfaces/producto';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit  {
  @ViewChild(IonInfiniteScroll) public infiniteScroll: IonInfiniteScroll;
  public resultado!: ResultadoPeticion;


  constructor(
    public apiProductos : ProductosServService,

    private router : Router,
  ) { }

  ngOnInit() {
  this.apiProductos.obtenerPrimeros20();
  }
  ngAfterViewInit(): void {

    this.apiProductos.listarProductos$.subscribe(value => {

      this.infiniteScroll.complete();
    });

  }
  public cargarmas(){
    this.apiProductos.obtenerSiguientes();
  }
}

