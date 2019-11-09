import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioPage } from './usuario.page';

import {CardComponent} from "../card/card.component";

const routes: Routes = [
  {
    path: '',
    component: UsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioPage,CardComponent]
})
export class UsuarioPageModule {}
