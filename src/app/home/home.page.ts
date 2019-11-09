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

  constructor(public publicadoresService: PublicadoresService) { }

  async ngOnInit() {
    this.listaDePublicadores = await this.publicadoresService.getAll();
  } 
}
