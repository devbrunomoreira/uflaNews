import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PublicacaoModel } from '../models/publicacao.model';
import { PublicacaoService } from '../services/publicacao.service';
import { ComentarioModel } from "../models/comentario.model";
import { ComentarioService } from '../services/comentarios.service';
import { UsuarioService } from "../services/usuario.service"


@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})

export class PublicacaoPage implements OnInit {
  private id: number;
  public publicacao: PublicacaoModel = {
    id: 0,
    idPublicador: 0,
    titulo: "Bife de Chorizo agora no RU!",
    data: new Date("2019-09-15T20:42"),
    img_url: "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000z3uDjEAI/5d4de764e4b014f1a28f7021.jpg&w=710&h=462",
    likes: 624,
    secoes: [
      {
        titulo: "Lorem Ipsum",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        icon: "https://cdn.onlinewebfonts.com/svg/img_174839.png"
      },
      {
        titulo: "Lorem Ipsum",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        icon: "https://cdn.onlinewebfonts.com/svg/img_174839.png"
      }
    ],
  };
  public comentarios: ComentarioModel[];
  public newComment: string;

  constructor(public publicacaoService: PublicacaoService, public comentarioService: ComentarioService, public usuarioService: UsuarioService, public activatedRoute: ActivatedRoute, private _location: Location) { }

  async ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.publicacao = await this.publicacaoService.getById(this.id);
    this.comentarios = await this.comentarioService.getAll(this.publicacao.id);
  }

  comentar = async () => {
    const comentario = await this.comentarioService.comentar(this.newComment,this.publicacao.id);
    this.comentarios.push(comentario);
  }

}
