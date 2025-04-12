import {ViewStyle} from 'react-native';

export interface StyledTextFieldProps {
  value?: string;
  containerStyle?: ViewStyle;
  textStyle?: ViewStyle;
  hintText?: string;
  errorText?: string;
  isCurrencyField?: boolean;
  onError?: boolean;
}
