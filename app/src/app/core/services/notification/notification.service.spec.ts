import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateServiceStub } from '../../../stubs/translate.service.stub';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './notification.service';
import { CoreModule } from './../../../core/core.module';
import { APP_CONFIG } from '../../../app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NotificationService', () => {
    let service: NotificationService;
    let snackBar: MatSnackBar;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                CoreModule,
            ],
            providers: [
                MatSnackBar,
                { provide: TranslateService, useValue: TranslateServiceStub}
            ]
        });
        service = TestBed.inject(NotificationService);
        snackBar = TestBed.inject(MatSnackBar);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call a snackbar', () => {
        const snackBarSpy = spyOn(snackBar, 'open').and.callThrough();
        service.notify('test');
        expect(snackBarSpy).toHaveBeenCalledWith(
            'test - translated',
            'common.close - translated',
            {duration: APP_CONFIG.notificationTime}
        );
    });
});
