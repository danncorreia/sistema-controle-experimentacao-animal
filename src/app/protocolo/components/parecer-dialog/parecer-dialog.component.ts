import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { ProtocoloController } from '../../controllers/protocolo.controller';
import { ProtocoloModel } from '../../../protocolo/models/protocolo';


@Component({
  selector: 'app-parecer-dialog',
  templateUrl: './parecer-dialog.component.html',
  styleUrls: ['./parecer-dialog.component.scss']
})
export class ParecerDialogComponent implements OnInit {

  form: FormGroup;
  cadastro: boolean;

  constructor(
    public dialogRef: MatDialogRef<ParecerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProtocoloModel,
    private controller: ProtocoloController,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.cadastro = this.data.parecer == null;
    this.form = new FormGroup({
      parecer: new FormControl(this.data.parecer.parecer,[Validators.required]),
      usoRecomendado: new FormControl(this.data.parecer.usoRecomendado,[Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizar(excluir: boolean = false){
    if(this.form.invalid){
      this.toastService.openSnackBar('Preencha todos os campos corretamente')
    }else{
      this.data.parecer = excluir ? null : this.form.value;
      this.controller.update(this.data).then(() => {
        this.onNoClick()
      });
    }
  }

}
