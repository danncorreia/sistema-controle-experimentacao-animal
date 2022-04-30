import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnimaisComponent } from './components/list-animais/list-animais.component';

const routes: Routes = [
  {path: "", component: ListAnimaisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
