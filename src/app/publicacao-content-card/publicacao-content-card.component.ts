import { Component,Input, OnInit } from '@angular/core';
import {Sessao} from "../../model/sessao";

@Component({
  selector: 'app-publicacao-content-card',
  templateUrl: './publicacao-content-card.component.html',
  styleUrls: ['./publicacao-content-card.component.scss'],
})
export class PublicacaoContentCardComponent implements OnInit {

  @Input() sessoes: Sessao[];

  constructor() { }

  ngOnInit() {}

}
