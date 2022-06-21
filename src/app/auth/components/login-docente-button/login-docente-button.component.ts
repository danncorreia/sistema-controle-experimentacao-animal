import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthController } from '../../controllers/auth.controller';
import { AuthLoginModel } from '../../models/auth';

@Component({
  selector: 'app-login-docente-button',
  templateUrl: './login-docente-button.component.html',
  styleUrls: ['./login-docente-button.component.scss']
})
export class LoginDocenteButtonComponent {

  constructor(private authController: AuthController, private router:Router) { }

  login(){
    this.authController.login_simples({tipo: 1, nome:"Docente"} as AuthLoginModel);
  }

}
