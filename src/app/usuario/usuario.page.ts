import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { PublicadoresService } from '../services/publicadores.service';
import { UsuarioModel } from '../models/usuario.model';
import { PublicadoresModel} from '../models/publicadores.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

public usuario: UsuarioModel = new UsuarioModel(null,"","teste",[],"",[]);
public publicadores: PublicadoresModel[] = [];

  constructor(public usuarioService: UsuarioService,public activatedRoute: ActivatedRoute,public publicadoresService: PublicadoresService, private _location: Location) {
    this.usuarioService.getLoggedUser().then((user) => {
      this.usuario = user;
      this.usuario.publicadoresInscritos.forEach((publicadorId) => {
          this.publicadoresService.getById(publicadorId).then((publicador) => {
            this.publicadores.push(publicador);
          });
      });
    });
   }

  ngOnInit() {


  }

}
