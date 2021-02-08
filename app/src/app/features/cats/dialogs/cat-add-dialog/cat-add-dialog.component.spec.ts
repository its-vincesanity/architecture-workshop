import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceStub } from '../../../../stubs/translate.service.stub';
import { CatAddDialogComponent } from './cat-add-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CatAddDialogComponent', () => {
    let component: CatAddDialogComponent;
    let fixture: ComponentFixture<CatAddDialogComponent>;

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
            declarations: [ CatAddDialogComponent ],
            providers: [
                { provide: TranslateService, useValue: TranslateServiceStub },
                { provide: MatDialogRef, useValue: {} },
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CatAddDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
