import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatActivityComponent } from './cat-activity.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [CatActivityComponent],
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        GoogleChartsModule,
    ],
    exports: [CatActivityComponent],
})
export class CatActivityModule { }
