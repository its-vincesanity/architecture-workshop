import { of } from "rxjs";
import { TTheme } from '../core/services/theme/theme.type';

export const ThemeServiceStub = {
    getCurrentTheme: () => of<TTheme>('dark'),
    toggleTheme: (_theme: TTheme) => {},
    $change: of<TTheme>('light'),
};