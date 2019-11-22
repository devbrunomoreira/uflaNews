import {Component, Input, OnInit} from '@angular/core';
import {PublicadoresService} from '../services/publicadores.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  @Input() email: string;
  @Input() senha: string;

  constructor(
      public authService: AuthService,
      public router: Router
  ) { }

  async ngOnInit() {
    if (await this.authService.isAuthenticated()) {
      await this.router.navigate(['/']);
    } else {
      await this.router.navigate(['/login']);
    }
  }

  async login() {
    await this.authService.login(this.email, this.senha);
    if (await this.authService.isAuthenticated()) {
      await this.router.navigate(['/']);
    } else {
      await this.router.navigate(['/login']);
    }
  }
}
