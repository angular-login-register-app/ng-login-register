import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';

import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {AppRoutingModule} from '../../app-routing.module';
import {AuthInterceptor} from '../../interceptors/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from '../../services/auth.service';
import {NotFoundComponent} from '../../components/not-found/not-found.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        NotFoundComponent
    ],
    providers: [
        AuthService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ]
})
export class CoreModule {
}
