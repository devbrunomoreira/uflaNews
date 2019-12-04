import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { PublicadoresService } from '../services/publicadores.service';
import { UsuarioModel } from '../models/usuario.model';
import { PublicadoresModel} from '../models/publicadores.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

public usuario: UsuarioModel;
public publicadores: PublicadoresModel[] = [];

  constructor(public usuarioService: UsuarioService,public activatedRoute: ActivatedRoute,public publicadoresService: PublicadoresService) { }

  async ngOnInit() {

    this.usuario = await this.usuarioService.getLoggedUser();

    this.usuario.publicadoresInscritos.forEach(async (publicadorId) => {
        const publicador = await this.publicadoresService.getById(publicadorId);
        this.publicadores.push(publicador);
    });
  }

}
