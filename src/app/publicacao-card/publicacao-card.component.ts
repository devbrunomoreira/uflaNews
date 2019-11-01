import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao-card',
  templateUrl: './publicacao-card.component.html',
  styleUrls: ['./publicacao-card.component.scss'],
})
export class PublicacaoCardComponent implements OnInit {

  @Input() id: number;
  @Input() titulo: string;
  @Input() data: string;
  @Input() img_url: string;
  @Input() likes: number;

  constructor() {
  }

  ngOnInit() {
  }



}
