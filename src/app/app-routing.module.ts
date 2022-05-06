import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './shared/components/dashboard-view/dashboard-view.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', component: DashboardViewComponent, children: [
    {path: "animais", loadChildren: () => import('./animais/animais.module').then(m => m.AnimaisModule)},
    {path: "discentes", loadChildren: () => import('./discentes/discentes.module').then(m => m.DiscentesModule)},
    {path: "bioterio", loadChildren: () => import('./bioterio/bioterio.module').then(m => m.BioterioModule)},
    {path: "docentes", loadChildren: () => import('./docentes/docentes.module').then(m => m.DocentesModule)},
    {path: "protocolos", loadChildren: () => import('./protocolos/protocolos.module').then(m => m.ProtocolosModule)},
    {path: "", redirectTo: "docentes", pathMatch: "full"}
  ],
  canActivate: [AuthGuard]
  },
  {path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
