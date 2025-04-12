import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {showAlert} from '../component/alertView/AlertView';
import {setTransactionInfo} from '../reduxToolKit/slice/TransactionInfoSlice';
import {TransactionDetail} from '../types/TransactionDetailDataType';
import {transferSchema} from '../utils/TransferDetailScheme';
import {useBioMetricAuthentication} from './UseBiometricAuthentication';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StacksParamList} from '../types/ScreenTypes';

export const useTransferForm = () => {
  const route = useRoute<RouteProp<StacksParamList, 'transferScreen'>>();
  const {amount, recipient, notes} = route.params;
  const initialFormValue: TransactionDetail = {
    amount: amount ?? '',
    recipientAccNum: recipient ?? '',
    transactionNote: notes,
  };

  const dispatch = useDispatch();
  const {requestAuthenticationCheck} = useBioMetricAuthentication();

  const onSubmit = async (values: TransactionDetail) => {
    dispatch(setTransactionInfo(values));
    showAlert({
      title: 'Confirmation',
      message: `Are you sure you want to transfer? \n\nAmount: MYR ${values.amount}\n Recipient: ${values.recipientAccNum}`,
      confirmText: 'OK',
      cancelText: 'Cancel',
      onConfirm: () => requestAuthenticationCheck(values),
    });
  };

  const formik = useFormik<TransactionDetail>({
    initialValues: initialFormValue,
    onSubmit,
    enableReinitialize: true,
    validationSchema: transferSchema,
  });

  return {
    formik,
  };
};
