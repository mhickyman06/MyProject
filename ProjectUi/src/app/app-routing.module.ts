import { LoginSuccessComponent } from './login-success/login-success.component';
import { AuthGuard } from './activator/auth';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path:"LoginSucessful",
    component:LoginSuccessComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthenticationRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
