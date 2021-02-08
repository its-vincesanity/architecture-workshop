import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TTheme } from './theme.type';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    public $change: Subject<TTheme> = new Subject();

    private theme: TTheme = 'dark';

    constructor(@Inject(DOCUMENT) private readonly document: Document) {}

    public getCurrentTheme(): TTheme {
        return this.theme;
    }

    public toggleTheme(): void {
        switch (this.theme) {
            case 'dark':
                this.theme = 'light';
                this.document.body.classList.add('light-theme');
                break;
            case 'light':
                this.document.body.classList.remove('light-theme');
                this.theme = 'dark';
                break;
            default:
                this.document.body.classList.remove('light-theme');
                this.theme = 'dark';
                break;
        }
        this.$change.next(this.theme);
    }

}
