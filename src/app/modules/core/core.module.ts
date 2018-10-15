import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {AppRoutingModule} from '../../app-routing.module';
import {AuthInterceptor} from '../../interceptors/auth.interceptor';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ]
})
export class CoreModule {
}
