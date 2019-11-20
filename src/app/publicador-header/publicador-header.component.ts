import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicador-header',
  templateUrl: './publicador-header.component.html',
  styleUrls: ['./publicador-header.component.scss'],
})
export class PublicadorHeaderComponent implements OnInit {

  @Input() titulo: string;
  @Input() nInscritos: string;
  @Input() image: string;
  icon = "../../assets/icon/inscrever-icon.png";

  constructor() { }

  ngOnInit() {}

  clickInscreverButton = () =>{
    if(this.icon == "../../assets/icon/inscrever-icon.png"){
      this.icon = "../../assets/icon/desinscrever-icon.png";
    }else{
      this.icon = "../../assets/icon/inscrever-icon.png";
    }
  }

}
