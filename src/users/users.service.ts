import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { UnauthorizedError } from 'src/common/errors/types/UnauthorizedError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);

    if (!newUser) {
      throw new Error('Falha ao cadastrar usuário');
    }

    return newUser;
  }

  async findAll() {
    const allUsers = await this.usersRepository.findAll();

    if (!allUsers) {
      throw new Error('Falha ao listar usuários');
    }

    return allUsers;
  }

  async findOne(email: string) {
    const user = await this.usersRepository.findOne(email);

    if (!user) {
      throw new Error('Falha ao encontrar usuário');
    }

    return user;
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.usersRepository.update(email, updateUserDto);

    if (!updateUser) {
      throw new Error('Falha ao atualizar usuário');
    }

    return updateUser;
  }

  async remove(id: number) {
    const deleteUser = await this.usersRepository.remove(id);

    if (!deleteUser) {
      throw new Error('Falha ao excluir usuário');
    }

    return deleteUser;
  }
}
