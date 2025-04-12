import {createApi} from '@reduxjs/toolkit/query/react';
import {RootState} from '../ReduxStore';
import {
  TransactionDataType,
  TransferAmountParam,
} from '../../types/api/TransactionApiType';
import {truncateToTwoDecimals} from '../../utils/CurrencyFormatterUtils';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: async ({url, method, body}, api) => {
    await new Promise(res => setTimeout(res, 1500));
    const state = api.getState() as RootState;
    const defaultAmount =
      state.rootReducer.UserReducer?.userInfo.userBalance ?? 0;
    const amount = parseFloat(body?.detail.amount);
    if (amount > defaultAmount) {
      return {error: {status: 400, data: 'Insufficient funds.'}};
    }
    // We skip round off instead truncate to two decimals. Example: MYR 100.333333 to MYR 100.33 //
    const accBalance: number = truncateToTwoDecimals(defaultAmount - amount);
    return {
      data: {
        transactionId: `TXID${Math.floor(Math.random() * 1000000)}`,
        amount,
        timestamp: new Date().toISOString(),
        accBalance,
        transactionDetail: body?.detail,
      },
    };
  },
  endpoints: builder => ({
    requestToTransfer: builder.mutation<
      TransactionDataType,
      TransferAmountParam
    >({
      query: props => ({
        url: 'account/transfer',
        method: 'POST',
        body: props,
      }),
    }),
  }),
  tagTypes: [],
});

export const {useRequestToTransferMutation} = transactionApi;
