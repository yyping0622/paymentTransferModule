import {createSlice} from '@reduxjs/toolkit';

interface ViewState {
  isShowLoader: boolean;
}

const initialState: ViewState = {
  isShowLoader: false,
};

const ViewSlice = createSlice({
  name: 'ViewSlice',
  initialState: initialState,
  reducers: {
    setShowLoader: (state, action) => {
      state.isShowLoader = action.payload;
    },
  },
});

export const {setShowLoader} = ViewSlice.actions;

export default ViewSlice.reducer;
