import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomethingWentWrongComponent } from './components/something-went-wrong/something-went-wrong.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SomethingWentWrongComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  exports: [
    SomethingWentWrongComponent,
    LoadingComponent,
  ],
})
export class SharedModule { }
