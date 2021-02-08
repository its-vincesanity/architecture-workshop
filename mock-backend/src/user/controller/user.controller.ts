import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from '../../../../api/user/user.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getOne(): Promise<IUser> {
        return await this.userService.getUser();
    }

    @Post()
    async update(@Body() user: IUser): Promise<IUser> {
        return await this.userService.updateUser(user);
    }
}
