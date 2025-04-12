import {useRef, useState} from 'react';
import {
  TextInput as RNTextInput,
  Alert,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import {useAppSelector} from '../reduxToolKit/ReduxStore';
import {showAlert} from '../component/alertView/AlertView';
import {useTransactionServices} from './UseTransactionServices';
import {TransactionDetail} from '../types/TransactionDetailDataType';

export const usePinInput = (length: number = 4, detail: TransactionDetail) => {
  const {requestToTransfer} = useTransactionServices(true);
  const [pin, setPin] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<(RNTextInput | null)[]>([]);
  const {userPin} = useAppSelector(
    state => state.rootReducer.UserReducer.userInfo,
  );

  const handleChange = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (index === length - 1 && value) {
      const finalPin = newPin.join('');
      verifyPin(finalPin);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && pin[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const setInputRef = (index: number) => (ref: RNTextInput | null) => {
    inputs.current[index] = ref;
  };

  const verifyPin = (enteredPin: string) => {
    if (enteredPin === userPin) {
      requestToTransfer({detail});
    } else {
      showAlert({title: 'Error', message: 'Invalid PIN'});
    }
  };

  return {
    pin,
    handleChange,
    setInputRef,
    handleKeyPress,
  };
};
