import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomethingWentWrongComponent } from './components/something-went-wrong/something-went-wrong.component';

@NgModule({
  declarations: [SomethingWentWrongComponent],
  imports: [
    CommonModule,
  ],
  exports: [SomethingWentWrongComponent],
})
export class SharedModule { }
