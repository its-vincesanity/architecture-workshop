import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceStub } from '../../../../stubs/translate.service.stub';

import { CatDeleteDialogComponent } from './cat-delete-dialog.component';

describe('CatDeleteDialogComponent', () => {
    let component: CatDeleteDialogComponent;
    let fixture: ComponentFixture<CatDeleteDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule,
                MatDialogModule,
            ],
            declarations: [ CatDeleteDialogComponent ],
            providers: [
                { provide: TranslateService, useValue: TranslateServiceStub },
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CatDeleteDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
