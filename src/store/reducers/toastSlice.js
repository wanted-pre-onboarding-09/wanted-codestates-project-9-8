import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isToast: {
    warning: false,
    add: false,
    change: false,
    delete: false,
  },
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    onToast(state, action) {
      const type = action.payload;
      state.isToast = { ...state.isToast, [type]: true };
    },
    onReset(state) {
      state.isToast = {
        warning: false,
        add: false,
        change: false,
        delete: false,
      };
    },
  },
});

export const { onToast, onReset } = toastSlice.actions;
export default toastSlice.reducer;
