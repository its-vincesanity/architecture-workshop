import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateServiceStub } from '../../../../stubs/translate.service.stub';

import { CatActivityComponent } from './cat-activity.component';

describe('CatActivityComponent', () => {
    let component: CatActivityComponent;
    let fixture: ComponentFixture<CatActivityComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SharedModule,
                TranslateModule,
                GoogleChartsModule,
            ],
            declarations: [ CatActivityComponent ],
            providers: [
                { provide: TranslateService, useValue: TranslateServiceStub },
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CatActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
