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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('findAllUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('findUser:email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Patch('updateUser:email')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(email, updateUserDto);
  }

  @Delete('deleteUser:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
