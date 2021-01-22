import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { userMock } from '../user.mock';
import { delay } from '../../../config/config.json'

@Injectable()
export class UserService {

    private user = userMock;

    public async getUser(): Promise<IUser> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.user);
            }, delay);
            
        });
    }

    public async updateUser(user: IUser): Promise<IUser> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.user = user;
                resolve(this.user);
            }, delay);
            
        });
    }
}
