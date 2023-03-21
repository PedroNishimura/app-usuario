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
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Post('create')
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Get('findUserAccounts:id')
  findUserAccounts(@Param('id') id: string) {
    return this.accountsService.findUserAccounts(+id);
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Get('findAccount:id')
  findAccount(@Param('id') id: string) {
    return this.accountsService.findAccount(+id);
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Patch('update:id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
