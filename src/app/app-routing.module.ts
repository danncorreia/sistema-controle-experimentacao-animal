import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisModule } from './animais/animais.module';

const routes: Routes = [
  {path: "animais", loadChildren: () => import('./animais/animais.module').then(m => m.AnimaisModule)},
  {path: "discentes", loadChildren: () => import('./discentes/discentes.module').then(m => m.DiscentesModule)},
  {path: "bioterio", loadChildren: () => import('./bioterio/bioterio.module').then(m => m.BioterioModule)},
  {path: "docentes", loadChildren: () => import('./docentes/docentes.module').then(m => m.DocentesModule)},
  {path: "protocolos", loadChildren: () => import('./protocolos/protocolos.module').then(m => m.ProtocolosModule)},
  {path: "", redirectTo: "animais", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
