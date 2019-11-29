import { Component,Input, OnInit } from '@angular/core';
import { PublicadoresService } from '../services/publicadores.service';

@Component({
  selector: 'app-publicador-header',
  templateUrl: './publicador-header.component.html',
  styleUrls: ['./publicador-header.component.scss'],
})
export class PublicadorHeaderComponent implements OnInit {

  @Input() id: number;
  @Input() titulo: string;
  @Input() nInscritos: number;
  @Input() image: string;
  icon = "../../assets/icon/inscrever-icon.png";

  constructor(public publicadoresService: PublicadoresService) { }

  ngOnInit() {}

  clickInscreverButton = async () =>{
    if(this.icon == "../../assets/icon/inscrever-icon.png"){
      this.icon = "../../assets/icon/desinscrever-icon.png";
      await this.publicadoresService.inscrever(this.id);
      this.nInscritos += 1;
    }else{
      this.icon = "../../assets/icon/inscrever-icon.png";
      await this.publicadoresService.desinscrever(this.id);
      this.nInscritos -= 1;
    }
  }

}
