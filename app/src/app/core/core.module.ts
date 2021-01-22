import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomTranslationModule } from './custom-translation/custom-translation.module';
import { UserService } from './services/user/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomTranslationModule,
    MatSnackBarModule,

  ],
  providers: [
    UserService,
    MatSnackBar,
  ],
})
export class CoreModule { }
