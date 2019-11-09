import { Injectable } from '@angular/core';
import { PublicacaoModel } from '../models/publicacao.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";
import { AuthService } from './auth.service';

const API_URL: string = "http://localhost:3000";

@Injectable({
    providedIn: 'root'
})
export class PublicacaoService {


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
}