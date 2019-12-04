import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { PublicacaoModel } from '../models/publicacao.model';
import {PublicadoresService} from "../services/publicadores.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() id: number;
  @Input() titulo: string;
  @Input() nInscritos: number;
  @Input() nPublicacoes: string;
  @Input() image: string;

  card_button: HTMLElement;
  acao = 'Inscrever';
  icon = 'add';
  color = '#008639';

  constructor(public publicadoresService: PublicadoresService,public usuarioService: UsuarioService) {


  }

  ngOnInit() {

    this.usuarioService.getLoggedUser().then((user) => {
      const usuario = user;
      if (usuario.publicadoresInscritos.findIndex(el => el === this.id) != -1){
        this.acao = 'Desinscrever';
        this.icon = 'remove';
        this.color = '#EE6611';
      }
    });
}


  clickInscreverButton = async () => {

    if (this.acao === 'Desinscrever') {
      this.acao = 'Inscrever';
      this.icon = 'add';
      this.color = '#008639';
      await this.publicadoresService.desinscrever(this.id);
      this.nInscritos -= 1;
    } else {
      this.acao = 'Desinscrever';
      this.icon = 'remove';
      this.color = '#EE6611';
      await this.publicadoresService.inscrever(this.id);
      this.nInscritos += 1;
    }
  }

}
