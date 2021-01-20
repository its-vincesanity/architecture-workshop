import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePipe } from './pipes/title.pipe'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TitlePipe
  ]
})
export class SharedModule { }
