import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
