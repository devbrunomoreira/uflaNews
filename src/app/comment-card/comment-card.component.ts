import { Component,Input, OnInit } from '@angular/core';
import { ComentarioModel } from "../models/comentario.model";

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit {

  @Input() comments: ComentarioModel[];
  constructor() { }

  ngOnInit() { }

}
