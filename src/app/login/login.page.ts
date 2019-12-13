import {Component, Input, OnInit} from '@angular/core';
import {PublicadoresService} from '../services/publicadores.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  @Input() email: string;
  @Input() senha: string;

  public message: string;

  constructor(
      public authService: AuthService,
      public router: Router,
      public toastController: ToastController
  ) { }

  async ngOnInit() {
    if (await this.authService.isAuthenticated()) {
      await this.router.navigate(['/home']);
    } else {
      await this.router.navigate(['/login']);
    }
  }

  async login() {
    await this.authService.login(this.email, this.senha).then((msg) => {
      this.message = msg;
    });
    const toast = await this.toastController.create({
      message: this.message,
      duration: 2000
    });
    toast.present();
    if (await this.authService.isAuthenticated()) {
      await this.router.navigate(['/home']);
    } else {
      await this.router.navigate(['/login']);
    }
  }
}
