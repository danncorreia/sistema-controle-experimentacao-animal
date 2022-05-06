import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ResquestResponseService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(text: string, button: string = 'OK') {
    this._snackBar.open(text, button, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  validateCatchError(message: string, e: any){
    if(e.status === 401) {
      window.localStorage.removeItem('user');
    }else if(e.status === 403) {
      this.openSnackBar('Usuário não autorizado');
    }else{
      this.openSnackBar(message);
    }

    return Promise.reject(e);
  }
}
