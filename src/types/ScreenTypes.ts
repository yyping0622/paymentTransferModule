import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import {TransactionDataType} from './api/TransactionApiType';
import {TransactionDetail} from './TransactionDetailDataType';

// This is for the useNavigation hook
type StackNavigation = StackNavigationProp<StacksParamList>;

type StacksParamList = {
  tabBarMain: undefined;
  transferScreen: {amount?: string; recipient?: string; notes?: string};
  transactionStatus: {transactionInfo: TransactionDataType};
  pinScreen: {transactionDetail: TransactionDetail};
};

type ScreenConfig = {
  name: keyof StacksParamList;
  title?: string;
  component?: any;
  options?: StackNavigationOptions;
};

export type {ScreenConfig, StackNavigation, StacksParamList};
