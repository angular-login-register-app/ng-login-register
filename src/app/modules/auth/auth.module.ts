import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {RegisterComponent} from '../../components/auth/register/register.component';
import {LoginComponent} from '../../components/auth/login/login.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: []
})
export class AuthModule {
}
