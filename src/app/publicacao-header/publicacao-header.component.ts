import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao-header',
  templateUrl: './publicacao-header.component.html',
  styleUrls: ['./publicacao-header.component.scss'],
})
export class PublicacaoHeaderComponent implements OnInit {

  @Input() titulo : string;
  @Input() data : Date;
  @Input() likes : number;
  @Input() img_url : string;

  icon = "../../assets/icon/curtir-icon.png";

  constructor() { }

  ngOnInit() {}

  clickCurtirButton = () =>{
    if(this.icon == "../../assets/icon/curtir-icon.png"){
      this.icon = "../../assets/icon/descurtir-icon.png";
    }else{
      this.icon = "../../assets/icon/curtir-icon.png";
    }
  }

}
