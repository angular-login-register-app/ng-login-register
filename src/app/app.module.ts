import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AuthModule} from './modules/auth/auth.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CoreModule} from './modules/core/core.module';
import { TradingAccountsComponent } from './components/trading-accounts/trading-accounts.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        TradingAccountsComponent,
    ],
    imports: [
        BrowserModule,
        AuthModule,
        CoreModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
