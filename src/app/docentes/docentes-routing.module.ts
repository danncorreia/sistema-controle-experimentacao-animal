import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDocentesComponent } from './components/list-docentes/list-docentes.component';
import { SharedModule } from '../shared/shared.module';
import { AddDocenteComponent } from './components/add-docente/add-docente.component';
import { DocenteDialogComponent } from './components/docente-dialog/docente-dialog.component';

const routes: Routes = [
  {path: "", component: ListDocentesComponent}
];

const components:any = [
  ListDocentesComponent,
  AddDocenteComponent,
  DocenteDialogComponent
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [...components],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
