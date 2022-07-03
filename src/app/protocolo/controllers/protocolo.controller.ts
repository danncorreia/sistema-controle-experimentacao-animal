import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResquestResponseService } from '../../shared/services/request/resquest-response.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { ProtocoloService } from '../services/protocolo.service';
import { ProtocoloModel } from '../models/protocolo';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloController {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private service: ProtocoloService, private loadingService:LoadingService, private requestResponseService: ResquestResponseService, private toastService: ToastService) {}

  get(): Promise<ProtocoloModel[]> {
    try {
      this.loadingService.showLoading();

      return this.service.get()
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao buscar protocolos', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar protocolo');
      return Promise.reject(error);
    }
  }

  del(id: number): Promise<any> {
    try {
      this.loadingService.showLoading();

      return this.service.del(id).then((resp) => {
        this.toastService.openSnackBar('Protocolo eliminado correctamente');
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao eliminar protocolo', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar protocolo');
      return Promise.reject(error);
    }
  }

  create(protocolo: ProtocoloModel): Promise<ProtocoloModel> {
    try {
      this.loadingService.showLoading();

      return this.service.create(protocolo).then((resp) => {
        this.toastService.openSnackBar('Protocolo salvo correctamente');
        return resp;
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao salvar protocolo', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar salvar protocolo');
      return Promise.reject(error);
    }
  }

  update(protocolo: ProtocoloModel): Promise<ProtocoloModel> {
    try {
      this.loadingService.showLoading();

      return this.service.update(protocolo).then((resp) => {
        this.toastService.openSnackBar('Protocolo atualizado correctamente');
        return resp;
      }).catch((e) => this.requestResponseService.validateCatchError('Erro ao atualizar protocolo', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar atualizar protocolo');
      return Promise.reject(error);
    }
  }
}
