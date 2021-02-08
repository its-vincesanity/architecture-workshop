import { TranslateService } from '@ngx-translate/core';
import { CUSTOM_TRANSLATION_CONSTANTS } from './custom-translation.contants';

export function CustomTranslationInitializier(translate: TranslateService): () => Promise<void> {
    translate.setDefaultLang(CUSTOM_TRANSLATION_CONSTANTS.DEFAULT_LANGUAGE);
    return () => translate.use(CUSTOM_TRANSLATION_CONSTANTS.DEFAULT_LANGUAGE).toPromise<void>();
}
