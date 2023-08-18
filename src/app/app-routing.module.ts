import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateContentComponent } from './components/authenticate-content/authenticate-content.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  {path:'', component: AuthenticateContentComponent},
  {path: 'Login', component: LoginFormComponent},
  {path: 'SignUp', component: SignupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
