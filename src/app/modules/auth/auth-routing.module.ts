import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../../components/auth/login/login.component';
import {RegisterComponent} from '../../components/auth/register/register.component';
import {CanDeactivateService} from '../../services/guards/can-deactivate.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
