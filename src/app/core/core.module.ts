import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomTranslationModule } from './custom-translation/custom-translation.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomTranslationModule
  ]
})
export class CoreModule { }
