import {TransactionDataType} from './api/TransactionApiType';

export type UserEntity = {
  userId: string;
  userName: string;
  userBalance: number;
  userPin: string;
  userSecureBalance: boolean;
  transactionHistory: TransactionDataType[];
};
