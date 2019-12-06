import { Injectable } from '@angular/core';
import { ComentarioModel } from '../models/comentario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';
import {UsuarioService} from './usuario.service';

import { map } from "rxjs/operators";
import { AuthService } from './auth.service';

const API_URL: string = "http://localhost:3000";

@Injectable({
    providedIn: 'root'
})
export class ComentarioService {

    constructor(public http: HttpClient, public authService: AuthService, public usuarioService: UsuarioService) { }

    async getHttpOptions() {
        const token = await this.authService.getAuthToken();

        const options = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`
            })
        };

        return options;
    }

    async getAll(id: number): Promise<ComentarioModel[]> {
        const options = await this.getHttpOptions();

        return this.http.get(`${API_URL}/comentarios?idPublicacao=${id}`, options).pipe(
            map(
                (itens: ComentarioModel[]) => {
                    return itens.map(
                        (item: ComentarioModel) => {
                            return new ComentarioModel(
                                item.id,
                                item.idPublicacao,
                                item.nomeUsuario,
                                item.comentario,
                                item.timestamp
                            )
                        }
                    )
                }
            )
        ).toPromise();
    }

    async comentar(commentText: string,publicacaoId: number): Promise<ComentarioModel>{
      const options = await this.getHttpOptions();
      const user = await this.usuarioService.getLoggedUser();
      const data = new Date();
      const comment = new ComentarioModel(null,publicacaoId,user.nome,commentText,data);

      this.http.post(`${API_URL}/comentarios`, comment, options).toPromise();
      return comment;
    }
}
