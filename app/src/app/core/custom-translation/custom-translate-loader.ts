import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CUSTOM_TRANSLATION_CONSTANTS } from './custom-translation.contants';

export function CustomTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(
        http,
        CUSTOM_TRANSLATION_CONSTANTS.FILE_PATH,
        CUSTOM_TRANSLATION_CONSTANTS.FILE_SUFFIX
    );
}
