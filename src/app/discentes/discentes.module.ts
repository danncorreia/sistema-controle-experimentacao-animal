import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscentesRoutingModule } from './discentes-routing.module';
import { ListDiscentesComponent } from './components/list-discentes/list-discentes.component';


@NgModule({
  declarations: [
    ListDiscentesComponent
  ],
  imports: [
    CommonModule,
    DiscentesRoutingModule
  ]
})
export class DiscentesModule { }
