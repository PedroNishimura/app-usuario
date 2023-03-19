/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { AccountEntity } from '../entities/account.entity';

@Injectable()
export class AccountsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    return this.prisma.account.create({
      data: createAccountDto,
    });
  }

  async findUserAccounts(userId: number): Promise<AccountEntity[]> {
    return this.prisma.account.findMany({
      where: {
        userId,
      },
      include: {
        relation: true
      }
    })
  }

  async findAccount(id: number): Promise<AccountEntity> {
    return this.prisma.account.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto): Promise<AccountEntity> {
    return this.prisma.account.update({
      where: {
        id,
      },
      data: updateAccountDto
    });
  }

  async remove(id: number): Promise<AccountEntity> {
    return this.prisma.account.delete({
      where: {
        id,
      }
    });
  }
}
