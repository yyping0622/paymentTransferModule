import {useEffect} from 'react';
import {useAppDispatch} from '../reduxToolKit/ReduxStore';
import {useRequestToTransferMutation} from '../reduxToolKit/services/TransactionApi';
import {setShowLoader} from '../reduxToolKit/slice/ViewSlice';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types/ScreenTypes';
import {showAlert} from '../component/alertView/AlertView';
import {ErrorType} from '../types/api/TransactionApiType';
import {
  setTransactionHistory,
  setUserInfo,
} from '../reduxToolKit/slice/UserSlice';

export const useTransactionServices = (isPinAuth: boolean = false) => {
  const dispatch = useAppDispatch();
  const [requestToTransfer, {isLoading, data: transactionInfo, error}] =
    useRequestToTransferMutation();
  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    dispatch(setShowLoader(isLoading));
  }, [isLoading]);

  useEffect(() => {
    if (transactionInfo) {
      dispatch(setUserInfo({userBalance: transactionInfo.accBalance}));
      dispatch(setTransactionHistory(transactionInfo));
      navigation.navigate('transactionStatus', {transactionInfo});
    }
  }, [transactionInfo]);

  useEffect(() => {
    if (error) {
      const errorMsg =
        (error as ErrorType)?.data ??
        'Transaction is error, please try again later.';
      showAlert({
        title: 'Error',
        message: errorMsg,
        confirmText: 'OK',
        onConfirm: () => {
          if (isPinAuth) {
            navigation.goBack();
          }
        },
      });
    }
  }, [error]);

  return {requestToTransfer};
};
