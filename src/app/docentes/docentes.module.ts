import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { AddDocenteComponent } from './components/add-docente/add-docente.component';
import { DocenteDialogComponent } from './components/docente-dialog/docente-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    DocentesRoutingModule
  ]
})
export class DocentesModule { }
