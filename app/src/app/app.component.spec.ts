import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { APP_CONFIG } from './app.config';
import { HeaderComponent } from './navigation/header/header.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule,

            SharedModule,

            MatToolbarModule,
            MatSlideToggleModule,
            MatButtonModule,
            MatIconModule,
        ],
        declarations: [
            AppComponent,
            HeaderComponent,
        ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should set title from APP_CONFIG`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual(APP_CONFIG.title);
    });
});
