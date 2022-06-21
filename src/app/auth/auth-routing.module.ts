  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginDocenteButtonComponent } from './components/login-docente-button/login-docente-button.component';
import { LoginDiscenteButtonComponent } from './components/login-discente-button/login-discente-button.component';

const routes: Routes = [
  {path: "", component: AuthPageComponent}
];

const components: any[] = [
  AuthPageComponent,
  LoginDocenteButtonComponent,
  LoginDiscenteButtonComponent

]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations: [...components]
})
export class AuthRoutingModule { }
