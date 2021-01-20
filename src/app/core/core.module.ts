import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomTranslationModule } from './custom-translation/custom-translation.module';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomTranslationModule
  ],
  providers: [UserService],
})
export class CoreModule { }
