import { of } from 'rxjs';
import { IUser } from '../../../../api/user/user.interface';
import { MUser } from '../../../../api/user/user.mock';

export const UserServiceStub = {
    getCurrentUser: () => of(MUser),
    updateUser: (user: IUser) => of(user),
    $update: of(MUser),
};
