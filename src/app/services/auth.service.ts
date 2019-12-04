import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';
import { map } from 'rxjs/operators';

const TOKEN_KEY = 'auth-token';
const EMAIL_KEY = 'auth-userid';

const API_URL = 'http://localhost:8000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authState = new BehaviorSubject(false);

    constructor(
        public storage: Storage,
        public plt: Platform,
        public http: HttpClient
    ) {
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }

    async checkToken() {
        const res = await this.storage.get(TOKEN_KEY);
        if (res) {
            this.authState.next(true);
        }
    }

    async login(email: string, password: string) {
        const data = {
            email,
            password
        };

        const token = await this.http.post(`${API_URL}/auth/login`, data).pipe(
            map(
                (item: any) => {
                    return item.access_token;
                }
            )
        ).toPromise();

        if (token) {
            await this.storage.set(TOKEN_KEY, token);
            await this.storage.set(EMAIL_KEY, email);

            this.authState.next(true);
        }
    }

    async register(email: string, password: string, nome: string, matricula: string) {
        const data = {
            email,
            password,
            nome,
            matricula
        };

        return this.http.post(`${API_URL}/auth/register`, data).toPromise();
    }

    async isUserRegistered(email: string) {
      this.http.get(`${API_URL}/users?email=${email}`).toPromise()
        .then(response => console.log(response));
    }

    async logout() {
        await this.storage.remove(TOKEN_KEY);
        await this.storage.remove(EMAIL_KEY);
        this.authState.next(false);
    }

    isAuthenticated(): boolean {
        return this.authState.value;
    }

    async getAuthEmail() : Promise<string>{
        return this.storage.get(EMAIL_KEY);
    }

    async getAuthToken(): Promise<string> {
        return this.storage.get(TOKEN_KEY);
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
