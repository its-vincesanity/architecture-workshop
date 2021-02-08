import { of } from 'rxjs';

export const TranslateServiceStub = {
    onLangChange: of('newlanguage'),
    onTranslationChange: of('newlanguage'),
    onDefaultLangChange: of('newlanguage'),
    setDefaultLang: (_: string) => of(),
    get: (value: string) => of(`${value} - translated`),
    instant: (value: string) => `${value} - translated`,
    use: (_: string) => of(),
};
