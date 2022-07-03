import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcoloViewComponent } from './components/procolo-view/procolo-view.component';

const routes: Routes = [
  {path: '', component: ProcoloViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtocoloRoutingModule { }
