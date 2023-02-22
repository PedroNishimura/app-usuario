import { Account } from '@prisma/client';

export class AccountEntity implements Account {
  id: number;
  userId: number;
  accountName: string;
  premium: boolean;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}
