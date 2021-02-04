import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomTranslationModule } from './custom-translation/custom-translation.module';
import { UserService } from './services/user/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ThemeService } from './services/theme/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomTranslationModule,
    MatSnackBarModule,
    TranslateModule,
  ],
  providers: [
    UserService,
    ThemeService,
    TranslateService,
    MatSnackBar,
  ],
  exports: [CustomTranslationModule]
})
export class CoreModule { }
