import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {RegisterComponent} from '../../components/auth/register/register.component';
import {LoginComponent} from '../../components/auth/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: []
})
export class AuthModule {
}
