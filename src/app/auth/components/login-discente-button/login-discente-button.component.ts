import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthController } from '../../controllers/auth.controller';
import { AuthLoginModel } from '../../models/auth';

@Component({
  selector: 'app-login-discente-button',
  templateUrl: './login-discente-button.component.html',
  styleUrls: ['./login-discente-button.component.scss']
})
export class LoginDiscenteButtonComponent {

  constructor(private authController: AuthController) { }

  login(){
    this.authController.login_simples({tipo: 2, nome:"Discente"} as AuthLoginModel);
  }


}
