import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDocentesComponent } from './components/list-docentes/list-docentes.component';

const routes: Routes = [
  {path: "", component: ListDocentesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
