import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserEntity} from '../../types/UserEntityType';
import {TransactionDataType} from '../../types/api/TransactionApiType';

interface UserInfoState {
  userInfo: UserEntity;
}

const initialState: UserInfoState = {
  userInfo: {
    userId: '001',
    userName: 'Jess Pang',
    userPin: '1234',
    userBalance: 10000,
    userSecureBalance: false,
    transactionHistory: [],
  },
};

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Partial<UserEntity>>) => {
      Object.assign(state.userInfo, action.payload);
    },
    setTransactionHistory: (
      state,
      action: PayloadAction<TransactionDataType>,
    ) => {
      state.userInfo.transactionHistory.push(action.payload);
    },
  },
});

export const {setUserInfo, setTransactionHistory} = UserSlice.actions;
export default UserSlice.reducer;
