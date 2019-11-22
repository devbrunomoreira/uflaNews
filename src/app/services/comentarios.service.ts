import { Injectable } from '@angular/core';
import { ComentarioModel } from '../models/comentario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";
import { AuthService } from './auth.service';

const API_URL: string = "http://localhost:8000";

@Injectable({
    providedIn: 'root'
})
export class ComentarioService {

    constructor(public http: HttpClient, public authService: AuthService) { }

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
}
