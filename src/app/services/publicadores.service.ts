import { Injectable } from '@angular/core';
import { PublicadoresModel } from '../models/publicadores.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

const API_URL = 'http://localhost:8000';

@Injectable({
    providedIn: 'root'
})
export class PublicadoresService {


    constructor(public http: HttpClient, public authService: AuthService) { }

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
}
