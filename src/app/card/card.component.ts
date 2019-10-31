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
  icon = 'remove';

  constructor() { }

  ngOnInit() { }

  clickInscreverButton = () => {
    if (this.acao === 'Desinscrever') {
      this.acao = 'Inscrever';
      this.icon = 'add';
    } else {
      this.acao = 'Desinscrever';
      this.icon = 'remove';
    }
  }

}
