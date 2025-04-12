import {StackNavigationOptions} from '@react-navigation/stack';
import {TransferScreen, TabBarMain, TransactionStatusScreen, PinScreen} from '../screens';
import {ScreenConfig} from '../types/ScreenTypes';

const navigationDefaultOption: StackNavigationOptions = {
  headerShadowVisible: false,
  headerTintColor: 'black',
  headerTitleAlign: 'center',
};

export const navigationInitialScreens: ScreenConfig[] = [
  {
    name: 'tabBarMain',
    component: TabBarMain,
    options: {headerShown: false},
  },
  {
    name: 'transferScreen',
    component: TransferScreen,
    options: {
      title: 'Transfer Money',
      ...navigationDefaultOption,
    },
  },
  {
    name: 'transactionStatus',
    component: TransactionStatusScreen,
    options: {
      headerShown: false,
      ...navigationDefaultOption,
    },
  },
  {
    name: 'pinScreen',
    component: PinScreen,
    options: {
      title: 'Pin Authentication',
      ...navigationDefaultOption,
    },
  },
];
