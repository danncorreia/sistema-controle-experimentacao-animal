import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDiscentesComponent } from './components/list-discentes/list-discentes.component';

const routes: Routes = [
  {path: "", component: ListDiscentesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscentesRoutingModule { }
