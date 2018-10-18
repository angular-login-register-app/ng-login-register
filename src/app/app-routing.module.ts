import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CanActivateService} from './services/guards/can-activate.service';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {TradingAccountsComponent} from './components/trading-accounts/trading-accounts.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateService]},
    {path: 'trading-accounts', component: TradingAccountsComponent, canActivate: [CanActivateService]},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
