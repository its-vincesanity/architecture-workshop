import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class CostumMissingTranslationHandler implements MissingTranslationHandler {
    /**
     * handle missing translations
     */
    public handle(params: MissingTranslationHandlerParams): string {
        const errorRegEx = /errors\./;
        if (params.key.match(errorRegEx) !== null) {
            return params.translateService.instant('errors.UnknownError');
        }
        return params.key;
    }
}
