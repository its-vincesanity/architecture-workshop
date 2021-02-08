import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { CatsComponent } from './cats.component';
import { CatAddDialogComponent } from './dialogs/cat-add-dialog/cat-add-dialog.component';
import { CatDeleteDialogComponent } from './dialogs/cat-delete-dialog/cat-delete-dialog.component';
import { CatUpdateDialogComponent } from './dialogs/cat-update-dialog/cat-update-dialog.component';
import { TranslateServiceStub } from '../../stubs/translate.service.stub';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatsService } from './services/cats.service';
import { CatsServiceStub } from '../../stubs/cats.service.stub';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CatsComponent', () => {
    let component: CatsComponent;
    let fixture: ComponentFixture<CatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                TranslateModule,
                HttpClientTestingModule,

                FormsModule,
                ReactiveFormsModule,

                SharedModule,

                MatInputModule,
                MatSnackBarModule,
                MatSlideToggleModule,
                MatTableModule,
                MatIconModule,
                MatBadgeModule,
                MatButtonModule,
                MatDialogModule,
                MatToolbarModule,
                MatTooltipModule,
            ],
            declarations: [
                CatsComponent,
                CatDeleteDialogComponent,
                CatAddDialogComponent,
                CatUpdateDialogComponent,
            ],
            providers: [
                { provide: TranslateService, useValue: TranslateServiceStub },
                { provide: CatsService, useValue: CatsServiceStub },
            ]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [
                    CatsComponent,
                    CatDeleteDialogComponent,
                    CatAddDialogComponent,
                    CatUpdateDialogComponent,
                ],
            }
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
