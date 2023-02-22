import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountEntity } from './entities/account.entity';
import { AccountsRepository } from './repositories/accounts.repository';

@Injectable()
export class AccountsService {
  constructor(private readonly accountsRepository: AccountsRepository) {}

  async create(createAccountDto: CreateAccountDto) {
    const newAccount = await this.accountsRepository.create(createAccountDto);

    if (!newAccount) {
      throw new Error('Erro ao criar conta');
    }

    return newAccount;
  }

  async findUserAccounts(userId: number): Promise<AccountEntity[]> {
    const userAccounts = await this.accountsRepository.findUserAccounts(userId);

    if (!userAccounts) {
      throw new Error('Erro ao listar contas do usuário');
    }

    return userAccounts;
  }

  async findAccount(userId: number) {
    const account = await this.accountsRepository.findAccount(userId);

    if (!account) {
      throw new Error('Erro ao trazer a conta');
    }

    return account;
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    const updateAccount = await this.accountsRepository.update(
      id,
      updateAccountDto,
    );

    if (!updateAccount) {
      throw new Error('Erro ao atualizar a conta');
    }

    return updateAccount;
  }

  async remove(id: number) {
    const removeAccount = await this.accountsRepository.remove(id);

    if (!removeAccount) {
      throw new Error('Erro ao excluir a conta');
    }

    return removeAccount;
  }
}
