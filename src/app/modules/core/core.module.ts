import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {AppRoutingModule} from '../../app-routing.module';

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
    ]
})
export class CoreModule {
}
