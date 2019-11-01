import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  publicadores = [
    {
      id: 0,
      titulo: 'Restaurante Universitário',
      nPublicacoes: 1,
      nInscritos: 2,
      image: '../assets/icon/restaurante-universitario.jpg'
    },
    {
      id: 1,
      titulo: 'PRG UFLA',
      nPublicacoes: 2,
      nInscritos: 3,
      image: 'https://img.elo7.com.br/product/zoom/13F22D3/2-bases-quadradas-com-velas-quadradas-castical-pequeno.jpg'
    }
  ];

  constructor() {}

}
