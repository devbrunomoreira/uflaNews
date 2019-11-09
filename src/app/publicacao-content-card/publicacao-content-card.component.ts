import { Component,Input, OnInit } from '@angular/core';
import { SecaoModel } from "../models/secao.model";

@Component({
  selector: 'app-publicacao-content-card',
  templateUrl: './publicacao-content-card.component.html',
  styleUrls: ['./publicacao-content-card.component.scss'],
})
export class PublicacaoContentCardComponent implements OnInit {

  @Input() secoes: SecaoModel[];

  constructor() { }

  ngOnInit() {}

}
