import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtocoloRoutingModule } from './protocolo-routing.module';
import { ProcoloViewComponent } from './components/procolo-view/procolo-view.component';
import { AddProtocoloComponent } from './components/add-protocolo/add-protocolo.component';
import { ProtocoloDialogComponent } from './components/protocolo-dialog/protocolo-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { ParecerDialogComponent } from '../protocolo/components/parecer-dialog/parecer-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ProtocoloRoutingModule,
    SharedModule
  ],
  declarations: [
    AddProtocoloComponent,
    ProtocoloDialogComponent,
    ProcoloViewComponent,
    ParecerDialogComponent
  ]
})
export class ProtocoloModule { }
