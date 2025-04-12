import {combineSlices} from '@reduxjs/toolkit';
import ViewReducer from './ViewSlice';
import TransactionInfoReducer from './TransactionInfoSlice';
import UserReducer from './UserSlice';

export const rootReducer = combineSlices({
  ViewReducer,
  TransactionInfoReducer,
  UserReducer,
});
