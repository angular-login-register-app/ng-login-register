import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatBadgeModule,
        MatExpansionModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatProgressBarModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatBadgeModule,
        MatExpansionModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatProgressBarModule,
        MatTabsModule
    ],
    declarations: []
})
export class MaterialModule {
}
