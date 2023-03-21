import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger/dist';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({ status: 409, description: 'Email Conflict' })
  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Get('findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Get('find:email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Patch('update:email')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(email, updateUserDto);
  }

  @ApiForbiddenResponse({ description: 'Acess denied' })
  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
