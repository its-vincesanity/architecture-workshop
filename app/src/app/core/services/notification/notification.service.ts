import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
      private readonly snackBar: MatSnackBar,
      private readonly translateService: TranslateService,
  ) { }

  public notify(translationKey: string): void {
    this.snackBar.open(
        this.translateService.instant(translationKey),
        this.translateService.instant('common.close'),
        { duration: APP_CONFIG.notificationTime},
    );
  }

}
