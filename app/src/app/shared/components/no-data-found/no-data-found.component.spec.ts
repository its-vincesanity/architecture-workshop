import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceStub } from '../../../stubs/translate.service.stub';

import { NoDataFoundComponent } from './no-data-found.component';

describe('NoDataFoundComponent', () => {
    let component: NoDataFoundComponent;
    let fixture: ComponentFixture<NoDataFoundComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                TranslateModule,
            ],
            declarations: [ NoDataFoundComponent ],
            providers: [
                { provide: TranslateService, useValue: TranslateServiceStub },
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NoDataFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
