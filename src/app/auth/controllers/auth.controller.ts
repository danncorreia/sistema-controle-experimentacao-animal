import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthModel, AuthLoginModel } from '../models/auth';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthController {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private authService: AuthService, private loadingService:LoadingService, private _snackBar: MatSnackBar) {}

  login(auth: AuthLoginModel): Promise<any> {
    try {
      this.loadingService.showLoading();

      return this.authService.login(auth).then((resp) => {
        window.localStorage.setItem('user', JSON.stringify(resp));
        this.openSnackBar('Seja Bem-Vindo!');
      }).catch((e) => {
        this.openSnackBar('Email ou senha incorretos!');
      }).finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.openSnackBar('Erro ao tentar fazer login!');
      return Promise.reject(error);
    }
  }

  openSnackBar(text: string, button: string = 'OK') {
    this._snackBar.open(text, button, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
