import { Component } from '@angular/core';
import { APP_CONFIG } from './app.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public title: string = APP_CONFIG.title;
}
