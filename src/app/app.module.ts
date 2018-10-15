import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import {AuthModule} from './modules/auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CoreModule} from './modules/core/core.module';
import {AuthService} from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        CoreModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
