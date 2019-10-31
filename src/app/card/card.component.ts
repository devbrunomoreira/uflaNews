import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() titulo: string;
  @Input() nInscritos: string;
  @Input() nPublicacoes: string;

  acao = 'Desinscrever';

  constructor() { }

  ngOnInit() {
  }

  clickInscreverButton = () => {
    if (this.acao === 'Desinscrever') {
      this.acao = 'Inscrever';
    } else {
      this.acao = 'Desinscrever';
    }
  }

}
