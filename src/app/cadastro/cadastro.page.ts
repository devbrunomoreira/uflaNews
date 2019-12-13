import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.page.html',
	styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

	 email: string;
	 senha: string;
	 matricula: string;
	 nome: string;
	 confirmacaoSenha: string;

	constructor(public authService: AuthService,
	            public router: Router,
				      public toastController: ToastController) {
	}

	ngOnInit() {
	}

	async registrar() {
		if (this.senha === this.confirmacaoSenha) {
			// await this.authService.isUserRegistered(this.email);
			await this.authService.register(this.email, this.senha, this.nome, this.matricula).then(async (response) => {
					await this.router.navigate(['login']);
			},
			async ()=>{
					const toast = await this.toastController.create({
		        message: "Erro ao efetuar cadastro!",
		        duration: 2000
		      });
		      await toast.present();
			});

		}
	}
}
