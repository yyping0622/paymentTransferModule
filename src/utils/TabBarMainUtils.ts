import {HomeScreen, TransactionHistoryScreen} from '../screens';
import {IconVariantProps} from '../types/component/IconTypes';

export const Screens = [
  {
    name: 'home',
    component: HomeScreen,
    title: 'Home',
  },
  {
    name: 'transactionHistory',
    component: TransactionHistoryScreen,
    title: 'History',
  },
];

export const TAB_ICON_MAPPING = new Map<string, string>([
  ['home', 'icn_home'],
  ['transactionHistory', 'icn_icon'],
]);
