import { Injectable } from '@angular/core';
import { PublicacaoModel } from '../models/publicacao.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  UsuarioModel
} from '../models/usuario.model';
import {UsuarioService} from '../services/usuario.service';

import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

const API_URL = 'http://localhost:8000';

@Injectable({
    providedIn: 'root'
})
export class PublicacaoService {


    constructor(public http: HttpClient, public authService: AuthService,public usuarioService: UsuarioService) { }

    async getHttpOptions() {
        const token = await this.authService.getAuthToken();

        const options = {
            headers: new HttpHeaders({
                Authorization: `Bearer ${token}`
            })
        };

        return options;
    }

    async getById(id: number): Promise<PublicacaoModel> {
        const options = await this.getHttpOptions();

        return this.http.get(`${API_URL}/publicacao/${id}`, options).pipe(
            map(
                (item: PublicacaoModel) => {
                    return new PublicacaoModel(
                        item.id,
                        item.idPublicador,
                        item.titulo,
                        item.data,
                        item.img_url,
                        item.likes,
                        item.secoes,
                    );
                }
            )
        ).toPromise();
    }


    async curtir(id: number): Promise<void> {
        const options = await this.getHttpOptions();

        this.usuarioService.getLoggedUser().then((user) => {
          this.http.get(`${API_URL}/users/${user.id}`, options).toPromise().then((response :UsuarioModel) => {

              response.likes ? response.likes.indexOf(id) === -1 && response.likes.push(id) : response.likes = [id];

              response = {
                  ...response,
                  likes: response.likes
              };

              this.http.put(`${API_URL}/users/${user.id}`, response, options).toPromise().then(()=>{
                  this.http.get(`${API_URL}/publicacao/${id}`, options).toPromise().then((publicacao :PublicacaoModel)=>{

                    publicacao = {
                      ...publicacao,
                      likes: publicacao.likes + 1
                    }

                    return this.http.put(`${API_URL}/publicacao/${id}`,publicacao, options).toPromise();
                  })
              });
          });
        });
    }

    async descurtir(id: number): Promise<void> {
        const options = await this.getHttpOptions();

        this.usuarioService.getLoggedUser().then((user) => {
          this.http.get(`${API_URL}/users/${user.id}`, options).toPromise().then((response :UsuarioModel) => {

              response.likes.splice(response.likes.indexOf(id), 1);

              response = {
                  ...response,
                  likes: response.likes
              };

              this.http.put(`${API_URL}/users/${user.id}`, response, options).toPromise().then(()=>{
                  this.http.get(`${API_URL}/publicacao/${id}`, options).toPromise().then((publicacao :PublicacaoModel)=>{

                    publicacao = {
                      ...publicacao,
                      likes: publicacao.likes - 1
                    }

                    return this.http.put(`${API_URL}/publicacao/${id}`,publicacao, options).toPromise();
                  })
              });
          });
        });

    }

    async getByPublisherId(id: number): Promise<PublicacaoModel[]> {
        const options = await this.getHttpOptions();

        return this.http.get(`${API_URL}/publicacao?idPublicador=${id}`, options).pipe(
            map(
                (itens: PublicacaoModel[]) => {
                    return itens.map(
                        (item: PublicacaoModel) => {
                            return new PublicacaoModel(
                                item.id,
                                item.idPublicador,
                                item.titulo,
                                item.data,
                                item.img_url,
                                item.likes,
                                item.secoes,
                            );
                        }
                    );
                }
            )
        ).toPromise();
    }
}
