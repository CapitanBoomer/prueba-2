import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ListaProductosPageRoutingModule } from './lista-productos-routing.module';

import { ListaProductosPage } from './lista-productos.page';
import { ProductosServService } from 'src/app/servicios/productos-serv.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ListaProductosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListaProductosPage],
  providers:[ProductosServService]
})
export class ListaProductosPageModule {}
