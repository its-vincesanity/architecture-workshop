import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/services/user/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';
import { deepCompare } from 'src/app/shared/helper/deep-compare';
import { deepCopy } from 'src/app/shared/helper/deep-copy';
import { USER_PROFILE } from './user-profile.constants';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user: IUser;
  private initialUser: IUser;

  public hasUserChanged = false;
  public isFormValid = true;

  constructor(
    private readonly userService: UserService
  ) { }

  public reset() {
    this.user = deepCopy(this.initialUser);
  }

  public validateForm() {
    this.hasUserChanged = !deepCompare(this.user, this.initialUser);
    this.isFormValid = 
      this.user.firstName.length >= USER_PROFILE.MINIMUM_INPUT_LENGTH &&
      this.user.lastName.length >= USER_PROFILE.MINIMUM_INPUT_LENGTH;
  }

  public updateUser() {
    this.userService.updateUser(this.user);
    this.initialUser = deepCopy(this.user);
    this.hasUserChanged = false;
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.initialUser = deepCopy(this.user);
  }

}
