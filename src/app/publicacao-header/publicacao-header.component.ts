import { Component,Input, OnInit } from '@angular/core';
import { PublicacaoService } from '../services/publicacao.service';

@Component({
  selector: 'app-publicacao-header',
  templateUrl: './publicacao-header.component.html',
  styleUrls: ['./publicacao-header.component.scss'],
})
export class PublicacaoHeaderComponent implements OnInit {

  @Input() id : number;
  @Input() titulo : string;
  @Input() data : Date;
  @Input() likes : number;
  @Input() img_url : string;

  icon = "../../assets/icon/curtir-icon.png";

  constructor(public publicacaoService: PublicacaoService) { }

  ngOnInit() {}

  clickCurtirButton = async () =>{
    if(this.icon == "../../assets/icon/curtir-icon.png"){
      this.icon = "../../assets/icon/descurtir-icon.png";
      await this.publicacaoService.curtir(this.id);
      this.likes += 1;
    }else{
      this.icon = "../../assets/icon/curtir-icon.png";
      await this.publicacaoService.descurtir(this.id);
      this.likes -= 1;
    }
  }

}
