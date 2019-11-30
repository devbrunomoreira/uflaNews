import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CardComponent} from "../card/card.component";

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CardComponent],
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
