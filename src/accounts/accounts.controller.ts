import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('create')
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get('findUserAccounts:id')
  findUserAccounts(@Param('id') id: string) {
    return this.accountsService.findUserAccounts(+id);
  }

  @Get('findAccount:id')
  findAccount(@Param('id') id: string) {
    return this.accountsService.findAccount(+id);
  }

  @Patch('update:id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
