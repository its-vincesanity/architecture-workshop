import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { deepCopy } from 'src/app/shared/helper/deep-copy';
import { IUser } from './user.interface';

const userMock: IUser = {
  firstName: 'John',
  lastName: 'Doe',
  profilePictureUrl: 'https://www.placecage.com/32/32'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser;
  public $update: Subject<IUser> = new Subject();

  constructor() {
    this.user = deepCopy(userMock);
  }

  public getCurrentUser(): IUser {
    return deepCopy(this.user);
  }

  public updateUser(user: IUser) {
    this.user = deepCopy(user);
    this.$update.next(deepCopy(user));
  }
}
