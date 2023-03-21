import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User Email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'User Name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'User Password' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'User Cpf' })
  @IsString()
  @IsNotEmpty()
  nationalDocument: string;

  @IsBoolean()
  admin: boolean;

  @IsString()
  birthday: string;
}
