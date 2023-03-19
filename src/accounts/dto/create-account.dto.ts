import { IsString, IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

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
}
