import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {rootReducer} from './slice/CombineSlice';
import {transactionApi} from './services/TransactionApi';

export const reduxStore = configureStore({
  reducer: {
    rootReducer: rootReducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([transactionApi.middleware]),
});

setupListeners(reduxStore.dispatch);

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

// Hook to access redux action
export const useAppDispatch: () => AppDispatch = useDispatch;

// Hook to access redux state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
