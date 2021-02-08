import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceStub } from '../../../../stubs/translate.service.stub';
import { CatUpdateDialogComponent } from './cat-update-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CatUpdateDialogComponent', () => {
    let component: CatUpdateDialogComponent;
    let fixture: ComponentFixture<CatUpdateDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                TranslateModule,
                FormsModule,
                ReactiveFormsModule,
                MatDialogModule,
                MatInputModule,
                MatSlideToggleModule,
            ],
            declarations: [ CatUpdateDialogComponent ],
            providers: [
                { provide: TranslateService, useValue: TranslateServiceStub },
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CatUpdateDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
