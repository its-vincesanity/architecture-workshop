import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatActivityComponent } from './cat-activity.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [CatActivityComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    GoogleChartsModule,
  ],
  exports: [CatActivityComponent],
})
export class CatActivityModule { }
