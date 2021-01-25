import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONFIG } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  public notify(message: string): void {
    this.snackBar.open(message, 'close', {
      duration: APP_CONFIG.notificationTime,
    });
  }

}
