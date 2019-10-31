import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias = [{
    titulo: 'Restaurante Universitário',
    nPublicacoes: 1,
    nInscritos: 2
  },
    {
      titulo: 'PRG UFLA',
      nPublicacoes: 2,
      nInscritos: 3
    }];

  constructor() {
  }

}
