import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';

@Module({
    imports: [UserModule, CatsModule],
    providers: [AppService],
})
export class AppModule {}
