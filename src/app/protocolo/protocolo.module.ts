import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtocoloRoutingModule } from './protocolo-routing.module';
import { ProcoloViewComponent } from './components/procolo-view/procolo-view.component';
import { AddProtocoloComponent } from './components/add-protocolo/add-protocolo.component';
import { ProtocoloDialogComponent } from './components/protocolo-dialog/protocolo-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProtocoloRoutingModule,
    SharedModule
  ],
  declarations: [
    AddProtocoloComponent,
    ProtocoloDialogComponent,
    ProcoloViewComponent
  ]
})
export class ProtocoloModule { }
