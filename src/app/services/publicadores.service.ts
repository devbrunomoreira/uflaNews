import { Injectable } from '@angular/core';
import { PublicadoresModel } from '../models/publicadores.model';
import { UsuarioModel} from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UsuarioService} from '../services/usuario.service';

import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

const API_URL = 'http://localhost:8000';

@Injectable({
    providedIn: 'root'
})
export class PublicadoresService {


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

    async getAll(): Promise<PublicadoresModel[]> {
        const options = await this.getHttpOptions();

        return this.http.get(`${API_URL}/publicadores`, options).pipe(
            map(
                (itens: PublicadoresModel[]) => {
                    return itens.map(
                        (item: PublicadoresModel) => {
                            return new PublicadoresModel(
                                item.id,
                                item.titulo,
                                item.publicacoes,
                                item.nInscritos,
                                item.image
                            );
                        }
                    );
                }
            )
        ).toPromise();
    }

    async getSearched(search: string): Promise<PublicadoresModel[]> {
        const options = await this.getHttpOptions();

        return this.http.get(`${API_URL}/publicadores?q=${search}`, options).pipe(
            map(
                (itens: PublicadoresModel[]) => {
                    return itens.map(
                        (item: PublicadoresModel) => {
                            return new PublicadoresModel(
                                item.id,
                                item.titulo,
                                item.publicacoes,
                                item.nInscritos,
                                item.image
                            );
                        }
                    );
                }
            )
        ).toPromise();
    }

    async getById(id: number): Promise<PublicadoresModel> {
        const options = await this.getHttpOptions();

        return this.http.get(`${API_URL}/publicadores/${id}`, options).pipe(
            map(
                (item: PublicadoresModel) => {
                    return new PublicadoresModel(
                        item.id,
                        item.titulo,
                        item.publicacoes,
                        item.nInscritos,
                        item.image
                    );
                }
            )
        ).toPromise();
    }

    async inscrever(id: number): Promise<void> {
        const options = await this.getHttpOptions();


        this.usuarioService.getLoggedUser().then((user) => {
          this.http.get(`${API_URL}/users/${user.id}`, options).toPromise().then((response :UsuarioModel) => {

              response.publicadoresInscritos ? response.publicadoresInscritos.indexOf(id) === -1 && response.publicadoresInscritos.push(id) : response.publicadoresInscritos = [id];

              response = {
                  ...response,
                  publicadoresInscritos: response.publicadoresInscritos
              };

              this.http.put(`${API_URL}/users/${user.id}`, response, options).toPromise().then(()=>{
                  this.http.get(`${API_URL}/publicadores/${id}`, options).toPromise().then((publicador :PublicadoresModel)=>{

                    publicador = {
                      ...publicador,
                      nInscritos: publicador.nInscritos + 1
                    }

                    return this.http.put(`${API_URL}/publicadores/${id}`,publicador, options).toPromise();
                  })
              });
          });
        });



    }

    async desinscrever(id: number): Promise<void> {
        const options = await this.getHttpOptions();

        this.usuarioService.getLoggedUser().then((user) => {

          this.http.get(`${API_URL}/users/${user.id}`, options).toPromise().then((response :UsuarioModel) => {

              response.publicadoresInscritos.splice(response.publicadoresInscritos.indexOf(id), 1);

              response = {
                  ...response,
                  publicadoresInscritos: response.publicadoresInscritos
              };

              this.http.put(`${API_URL}/users/${user.id}`, response, options).toPromise().then(()=>{
                  this.http.get(`${API_URL}/publicadores/${id}`, options).toPromise().then((publicador :PublicadoresModel)=>{

                    publicador = {
                      ...publicador,
                      nInscritos: publicador.nInscritos - 1
                    }

                    return this.http.put(`${API_URL}/publicadores/${id}`,publicador, options).toPromise();
                  })
              });
          });
        });

    }
}
