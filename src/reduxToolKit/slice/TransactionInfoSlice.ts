import {createSlice} from '@reduxjs/toolkit';
import {TransactionDetail} from '../../types/TransactionDetailDataType';

interface TransactionInfoState {
  transactionDetail?: TransactionDetail;
}

const initialState: TransactionInfoState = {
  transactionDetail: undefined,
};

const TransactionInfoSlice = createSlice({
  name: 'TransactionInfoSlice',
  initialState: initialState,
  reducers: {
    setTransactionInfo: (state, action) => {
      state.transactionDetail = action.payload;
    },
  },
});

export const {setTransactionInfo} = TransactionInfoSlice.actions;

export default TransactionInfoSlice.reducer;
