import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublicadorPage } from './publicador.page';
import { PublicadorHeaderComponent } from '../publicador-header/publicador-header.component';
import { PublicacaoCardComponent } from '../publicacao-card/publicacao-card.component';

const routes: Routes = [
  {
    path: '',
    component: PublicadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PublicadorPage,
    PublicadorHeaderComponent,
    PublicacaoCardComponent]
})
export class PublicadorPageModule {}
