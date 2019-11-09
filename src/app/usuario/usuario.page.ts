import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario = {
    nome: "Lula Livre",
    identificacao: "201420541",
    email: "lula.livre@gmail.com"
  };

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

  constructor() { }

  ngOnInit() {
  }

}
