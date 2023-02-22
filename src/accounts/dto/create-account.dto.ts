import {
  IsString,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  accountName: string;

  @IsBoolean()
  premium: boolean;

  @IsString()
  bio: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
