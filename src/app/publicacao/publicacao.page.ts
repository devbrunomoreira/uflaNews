import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage implements OnInit {

  publicacao = {
    id: 0,
    titulo: "Bife de Chorizo agora no RU!",
    data: "2019-09-15T20:42",
    img_url: "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000z3uDjEAI/5d4de764e4b014f1a28f7021.jpg&w=710&h=462",
    likes: 624,
    sessoes: [
      {
        name: "Lorem Ipsum",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        name: "Lorem Ipsum",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ],
    comments: [
      {
        user: "Fulano da Silva",
        userId: 0,
        date: "2019-09-15T20:42",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        user: "Fulano da Silva",
        userId: 0,
        date: "2019-09-15T20:42",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
