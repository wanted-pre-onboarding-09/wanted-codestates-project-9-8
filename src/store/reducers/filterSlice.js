import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 'title',
  keyword: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    chageSelected(state, action) {
      state.selected = action.payload;
    },
    changeKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

export const { chageSelected, changeKeyword } = filterSlice.actions;
export default filterSlice.reducer;
