import { NgModule } from '@angular/core';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoader } from './custom-translate-loader';
import { HttpClient } from '@angular/common/http';
import { CostumMissingTranslationHandler } from './custom-missing-translation-handler';

@NgModule({
  declarations: [],
  imports: [
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: CustomTranslateLoader,
          deps: [HttpClient],
      },
      missingTranslationHandler: { 
        provide: MissingTranslationHandler, 
        useClass: CostumMissingTranslationHandler, 
      },
    }),
  ]
})
export class CustomTranslationModule { }
