import * as yup from 'yup';
import {TransactionDetail} from '../types/TransactionDetailDataType';

export const transferSchema = yup.object().shape({
  recipientAccNum: yup.string().required('Recipient is required'),
  amount: yup
    .string()
    .required('Amount is required')
    .test('is-positive', 'Amount must be greater than 0', value => {
      if (!value) return false;
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      return numericValue > 0;
    }),
  transactionNote: yup.string().optional(),
});
