import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  productoId: string;
  producto;
  constructor(private activaedRoute: ActivatedRoute,
    private http: HttpClient,) { }

  ngOnInit() {{
    console.log(
     this.productoId = this.activaedRoute.snapshot.paramMap.get('id'));
     this.http.get('https://dummyjson.com/products/' + this.productoId).subscribe(res =>{this.producto = res})
 }
  }

}
