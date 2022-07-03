import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { ProtocoloModel } from '../../models/protocolo';
import { ProtocoloController } from '../../controllers/protocolo.controller';
import { BioterioController } from '../../../bioterio/controllers/bioterio.controller';
import { BioterioModel } from '../../../bioterio/models/bioterio';

@Component({
  selector: 'app-protocolo-dialog',
  templateUrl: './protocolo-dialog.component.html',
  styleUrls: ['./protocolo-dialog.component.scss']
})
export class ProtocoloDialogComponent implements OnInit {

  displayedColumns: string[] = ['especie', 'qtd', 'del'];
  dataSource:any;
  form: FormGroup;
  formEspecies: FormGroup;
  bioterios: BioterioModel[];

  constructor(
    public dialogRef: MatDialogRef<ProtocoloDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProtocoloModel,
    private controller: ProtocoloController,
    private toastService: ToastService,
    private bioterioController: BioterioController
  ) {
    this.getBioterios();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      matricula: new FormControl(this.data.matricula, [Validators.required]),
      justificativa: new FormControl(this.data.justificativa, [Validators.required]),
      resumoPt: new FormControl(this.data.resumoPt, [Validators.required]),
      resumoEng: new FormControl(this.data.resumoEng, [Validators.required]),
      dataPrevInicio: new FormControl(this.data.dataPrevInicio, [Validators.required]),
      dataPrevTermino: new FormControl(this.data.dataPrevTermino, [Validators.required, this.dataMaiorQueAtual]),
      especies: new FormControl(this.data.especies, [Validators.required]),
      bioterio: new FormControl(this.data.bioterio, [Validators.required])
    });

    this.dataSource = this.data.especies;

    this.formEspecies = new FormGroup({
      especie: new FormControl(),
      qtd: new FormControl()
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEspecie(){
    const especie = this.formEspecies.value;
    this.form.get('especies')?.setValue([...this.form.get('especies').value, especie]);
    this.dataSource = this.form.get('especies').value;
    this.formEspecies.reset();
  }

  removeEspecie(index: number){
    let especies = this.form.get('especies').value;
    especies.splice(index, 1);
    this.form.get('especies').setValue(especies);
    this.dataSource = especies;
  }

  cadastrar(){
    if(this.form.invalid){
      console.log(this.form.value)
      this.toastService.openSnackBar('Preencha todos os campos corretamente')
    }else{
      this.controller.create(this.form.value).then(() => {
        this.onNoClick()
      });
    }
  }

  atualizar(){
    if(this.form.invalid){
      this.toastService.openSnackBar('Preencha todos os campos corretamente')
    }else{
      this.controller.update(this.form.value).then(() => {
        this.onNoClick()
      });
    }
  }

  dataMaiorQueAtual(control: FormControl){
    if(control.value > new Date()){
      return null
    }else{
      return {error:'data menor que atual'}
    }
  }

  getBioterios(){
    this.bioterioController.get().then(resp => {
      this.bioterios = resp;
    })
  }
}
