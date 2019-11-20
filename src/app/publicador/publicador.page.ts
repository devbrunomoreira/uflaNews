import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PublicadoresModel } from "../models/publicadores.model";
import { PublicadoresService } from "../services/publicadores.service";
import { PublicacaoModel } from "../models/publicacao.model";
import { PublicacaoService } from "../services/publicacao.service";

@Component({
  selector: 'app-publicador',
  templateUrl: './publicador.page.html',
  styleUrls: ['./publicador.page.scss'],
})
export class PublicadorPage implements OnInit {

  public id: number;
  public publicador: PublicadoresModel = {
    id: 0,
    titulo: "Restaurante Universitário",
    publicacoes: [
      0,
      1
    ],
    nInscritos: 2,
    image: "../assets/icon/restaurante-universitario.jpg"
  };

  public noticias: PublicacaoModel[];

  constructor(public publicadoresService: PublicadoresService, public publicacaoService: PublicacaoService, public activatedRoute: ActivatedRoute, private _location: Location) { }

  async ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.publicador = await this.publicadoresService.getById(this.id);
    this.noticias = await this.publicacaoService.getByPublisherId(this.id);    
  }


}
