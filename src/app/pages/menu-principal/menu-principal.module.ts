import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule
 } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPrincipalPageRoutingModule } from './menu-principal-routing.module';

import { MenuPrincipalPage } from './menu-principal.page';
import {HttpClientModule} from '@angular/common/http'
import {RouterLinkActive, RouterLink} from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MenuPrincipalPageRoutingModule,
    HttpClientModule,
    RouterLinkActive,
    RouterLink
  ],
  declarations: [MenuPrincipalPage]
})
export class MenuPrincipalPageModule {}
