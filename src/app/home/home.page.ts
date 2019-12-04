import { Component, OnInit } from '@angular/core';
import { PublicadoresModel } from '../models/publicadores.model';
import { PublicadoresService } from '../services/publicadores.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listaDePublicadores: PublicadoresModel[];
  searchInput: string;

  constructor(public publicadoresService: PublicadoresService) { }

  async ngOnInit() {
    this.searchInput = "";
    this.listaDePublicadores = await this.publicadoresService.getAll();
  }

  search = async () => {
    if(this.searchInput.trim() == ""){
      this.listaDePublicadores = await this.publicadoresService.getAll();
    }else{
      this.listaDePublicadores = await this.publicadoresService.getSearched(this.searchInput);
    }
  }

  searchAll = async () => {
    this.listaDePublicadores = await this.publicadoresService.getAll();
    this.searchInput = "";
  }
}
