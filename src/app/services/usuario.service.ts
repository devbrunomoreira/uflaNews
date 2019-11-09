import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from './auth.service';
import { map } from "rxjs/operators";

const API_URL: string = "http://localhost:3000";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        public http: HttpClient, public authService: AuthService) { }

    async getHttpOptions() {
        const token = await this.authService.getAuthToken();

        const options = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`
            })
        };

        return options;
    }

    async getUserByEmail(email: string) {
        const options = await this.getHttpOptions();

        return this.http.get(`${API_URL}/users?email=${email}`, options).pipe(
            map(
                (users: UsuarioModel[]) => {
                    const user = users[0];
                    return (users.length == 0) ? null : new UsuarioModel(user.id, user.nome, user.email, user.likes, user.publicadoresIncritos);
                }
            )
        ).toPromise();
    }

    async add(user: UsuarioModel, token: string) {
        const options = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`
            })
        };

        return this.http.post(`${API_URL}/users`, user, options).toPromise();
    }
}