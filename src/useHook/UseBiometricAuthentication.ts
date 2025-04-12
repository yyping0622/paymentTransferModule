import {useEffect} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useTransactionServices} from './UseTransactionServices';
import {TransactionDetail} from '../types/TransactionDetailDataType';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types/ScreenTypes';

const rnBiometrics = new ReactNativeBiometrics();

export const useBioMetricAuthentication = () => {
  const navigation = useNavigation<StackNavigation>();
  const {requestToTransfer} = useTransactionServices();
  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async (): Promise<boolean> => {
    try {
      const {available} = await rnBiometrics.isSensorAvailable();
      return available;
    } catch {
      return false;
    }
  };

  const handleBiometricAuth = async (values: TransactionDetail) => {
    try {
      const {success} = await rnBiometrics.simplePrompt({
        promptMessage: 'Transfer with biometrics',
        cancelButtonText: 'Use PIN instead',
      });
      if (success) {
        requestToTransfer({detail: values});
      }
    } catch (error) {
      navigation.navigate('pinScreen', {transactionDetail: values});
    }
  };

  const requestAuthenticationCheck = async (values: TransactionDetail) => {
    const isBiometricAvailable = await checkBiometricAvailability();
    if (isBiometricAvailable) {
      handleBiometricAuth(values);
    } else {
      navigation.navigate('pinScreen', {transactionDetail: values});
    }
  };

  return {requestAuthenticationCheck};
};
