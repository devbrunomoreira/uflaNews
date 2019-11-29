import {Component, Input, OnInit} from '@angular/core';

import { PublicacaoModel } from '../models/publicacao.model';
import {PublicacaoService} from "../services/publicacao.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() id: number;
  @Input() titulo: string;
  @Input() nInscritos: string;
  @Input() nPublicacoes: string;
  @Input() image: string;

  card_button: HTMLElement;
  acao = 'Inscrever';
  icon = 'add';

  constructor(public publicacaoService: PublicacaoService) {

  }

  ngOnInit() { }

  clickInscreverButton = async () => {
    this.card_button = document.getElementById("card-button-" + String(this.id)) as HTMLElement;

    if (this.acao === 'Desinscrever') {
      await this.publicacaoService.desinscrever(this.id)
      this.acao = 'Inscrever';
      this.icon = 'add';
      this.card_button.style.color = '#008639';
      this.card_button.style.borderColor = '#008639';
    } else {
      await this.publicacaoService.inscrever(this.id);
      this.acao = 'Desinscrever';
      this.icon = 'remove';
      this.card_button.style.color = '#EE6611';
      this.card_button.style.borderColor = '#EE6611';
    }
  }

}
