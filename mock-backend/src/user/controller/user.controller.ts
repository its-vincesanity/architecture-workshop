import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}

    @Get()
    async getUser(): Promise<IUser> {
        return await this.userService.getUser();
    }

    @Post()
    async updateUser(
        @Body() user: IUser
    ): Promise<IUser> {
        return await this.userService.updateUser(user);
    }
}
