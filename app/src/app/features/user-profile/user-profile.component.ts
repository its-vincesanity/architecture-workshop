import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { deepCompare } from 'src/app/shared/helper/deep-compare';
import { deepCopy } from 'src/app/shared/helper/deep-copy';
import { IUser } from '../../../../../api/user/user.interface';
import { USER_PROFILE } from './user-profile.constants';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public MINIMUM_INPUT_LENGTH = USER_PROFILE.MINIMUM_INPUT_LENGTH;

  public loading: boolean;
  public error: boolean;

  public currentUser: IUser;
  private initialUser: IUser;

  public hasUserChanged = false;
  public isFormValid = true;

  constructor(
    private readonly userService: UserService,
    private readonly notificationService: NotificationService,
  ) { }

  public reset(): void{
    this.currentUser = deepCopy(this.initialUser);
    this.hasUserChanged = false;
  }

  public validateForm(): void {
    this.hasUserChanged = !deepCompare(this.currentUser, this.initialUser);
    this.isFormValid =
      this.currentUser.firstName.length >= this.MINIMUM_INPUT_LENGTH &&
      this.currentUser.lastName.length >= this.MINIMUM_INPUT_LENGTH;
  }

  public updateUser(): void {
    this.loading = true;
    this.userService.updateUser(this.currentUser).subscribe((response) => {
      this.currentUser = deepCopy(response);
      this.initialUser = deepCopy(response);
      this.loading = false;
      this.notificationService.notify('Updated user successful');
    }, () => {
      this.loading = false;
      this.error = true;
      this.notificationService.notify('Could not save User');
    });

    this.hasUserChanged = false;
  }

  private setCurrentUser(): void {
    this.loading = true;
    this.userService.getCurrentUser().subscribe(response => {
      this.currentUser = deepCopy(response);
      this.initialUser = deepCopy(response);
      this.loading = false;
    }, () => {
      this.loading = false;
      this.error = true;
    });
  }

  ngOnInit(): void {
    this.error = false;
    this.setCurrentUser();
  }

}
