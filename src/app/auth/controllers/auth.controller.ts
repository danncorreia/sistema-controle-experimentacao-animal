import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthModel, AuthLoginModel } from '../models/auth';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthController {

  constructor(private authService: AuthService, private loadingService:LoadingService, private toastService: ToastService, private router: Router) {}

  login(auth: AuthLoginModel): Promise<any> {
    try {
      this.loadingService.showLoading();

      return this.authService.login(auth).then((resp) => {
        window.localStorage.setItem('user', JSON.stringify(resp));
        this.toastService.openSnackBar('Seja Bem-Vindo!');
      }).catch((e) => {
        this.toastService.openSnackBar('Email ou senha incorretos!');
      }).finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar fazer login!');
      return Promise.reject(error);
    }
  }

  login_simples(auth: AuthLoginModel) {
    try {
      window.localStorage.setItem('user', JSON.stringify(auth));
      this.router.navigate(['/']);
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar fazer login!');
    }
  }
}
