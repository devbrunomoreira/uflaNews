import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias = [{
    titulo: 'Teste',
    nPublicacoes: 1,
    nInscritos: 2
  },
    {
      titulo: 'Teste2',
      nPublicacoes: 2,
      nInscritos: 3
    }];

  constructor() {
  }

}
