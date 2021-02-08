import { Injectable } from '@nestjs/common';
import { IUser } from '../../../../api/user/user.interface';
import { MUser } from '../../../../api/user/user.mock';
import { delay } from '../../../config/config.json';

@Injectable()
export class UserService {
    private user = MUser;

    public async getUser(): Promise<IUser> {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(this.user);
        }, delay);
        });
    }

    public async updateUser(userUpdate: IUser): Promise<IUser> {
        return new Promise((resolve) => {
        setTimeout(() => {
            this.user = userUpdate;
            resolve(this.user);
        }, delay);
        });
    }
}
