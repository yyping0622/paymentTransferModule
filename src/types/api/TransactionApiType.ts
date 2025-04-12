import {TransactionDetail} from '../TransactionDetailDataType';

type TransferAmountParam = {
  detail: TransactionDetail;
};
type TransactionDataType = {
  transactionId: string;
  amount: number;
  timestamp: string;
  accBalance: number;
  transactionDetail: TransactionDetail;
};

type ErrorType = {
  status: number;
  data: string;
};

export type {TransferAmountParam, TransactionDataType, ErrorType};
