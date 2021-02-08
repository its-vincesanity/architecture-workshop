import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { CatActivityModule } from './cat-activity/cat-activity.module';
import { TranslateServiceStub } from '../../../stubs/translate.service.stub';
import { CatDetailsComponent } from './cat-details.component';
import { CatsService } from '../services/cats.service';
import { CatsServiceStub } from '../../../stubs/cats.service.stub';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CatDetailsComponent', () => {
    let component: CatDetailsComponent;
    let fixture: ComponentFixture<CatDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                RouterTestingModule,
                TranslateModule,
                HttpClientTestingModule,

                SharedModule,
                CatActivityModule,

                MatCardModule,
                MatIconModule,
                MatButtonModule,
                MatToolbarModule,
                MatSnackBarModule,
            ],
            declarations: [ CatDetailsComponent ],
            providers: [
                { provide: TranslateService, useValue: TranslateServiceStub },
                { provide: CatsService, useValue: CatsServiceStub },
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CatDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
