import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { ListDocentesComponent } from './components/list-docentes/list-docentes.component';


@NgModule({
  declarations: [
    ListDocentesComponent
  ],
  imports: [
    CommonModule,
    DocentesRoutingModule
  ]
})
export class DocentesModule { }
