import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {AppRoutingModule} from '../../app-routing.module';
import {AuthInterceptor} from '../../interceptors/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from '../../services/auth.service';
import {NotFoundComponent} from '../../components/not-found/not-found.component';
import {ClickStopPropagationDirective} from '../../directives/click-stop-propagation.directive';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AngularFontAwesomeModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        ClickStopPropagationDirective,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AngularFontAwesomeModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        ClickStopPropagationDirective
    ],
    providers: [
        AuthService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ]
})
export class CoreModule {
}
