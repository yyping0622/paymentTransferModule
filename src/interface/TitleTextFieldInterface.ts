import {FormikProps} from 'formik';
import {TransactionDetail} from '../types/TransactionDetailDataType';
import RecipientTextField from '../screens/transfer/component/RecipientTextField';
import AmountTextField from '../screens/transfer/component/AmountTextField';
import TransferNoteTextField from '../screens/transfer/component/TransferNoteTextField';

export interface TitleTextFieldViewProps {
  title: string;
  variant?: 'AMOUNT' | 'RECIPIENT' | 'TRANSACTION_NOTE';
  formik: FormikProps<TransactionDetail>;
}
export interface CustomComponent {
  component: ({
    formik,
  }: {
    formik: FormikProps<TransactionDetail>;
  }) => React.ReactNode;
}

export const TextFieldComponents: Record<string, CustomComponent> = {
  RECIPIENT: {component: RecipientTextField},
  AMOUNT: {component: AmountTextField},
  TRANSACTION_NOTE: {component: TransferNoteTextField},
};

export interface FormTextFieldProps {
  formik: FormikProps<TransactionDetail>;
}
