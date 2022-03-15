import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModal: false,
  selectedData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onModal(state, action) {
      state.isModal = !state.isModal;
      state.selectedData = action.payload;
    },
    onClose(state) {
      state.isModal = false;
      state.selectedData = null;
    },
  },
});

export const { onModal, onClose } = modalSlice.actions;
export default modalSlice.reducer;
