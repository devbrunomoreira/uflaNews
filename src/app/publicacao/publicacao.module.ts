import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublicacaoPage } from './publicacao.page';
import { PublicacaoHeaderComponent } from '../publicacao-header/publicacao-header.component';
import { PublicacaoContentCardComponent } from '../publicacao-content-card/publicacao-content-card.component';
import { CommentCardComponent } from '../comment-card/comment-card.component';
import {AuthGuard} from "../guards/auth.guards";

const routes: Routes = [
  {
    path: '',
  canActivate: [AuthGuard],

    component: PublicacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PublicacaoPage,
                PublicacaoHeaderComponent,
                PublicacaoContentCardComponent,
                CommentCardComponent]
})
export class PublicacaoPageModule {}
