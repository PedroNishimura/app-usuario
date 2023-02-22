import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountsRepository } from './repositories/accounts.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, PrismaService, AccountsRepository],
})
export class AccountsModule {}
