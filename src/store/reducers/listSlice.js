import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maxId: 3,
  data: [
    {
      id: 1,
      title: '문성자연휴양림',
      addrees: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: '해위',
    },
    {
      id: 2,
      title: '문성자연휴양림1',
      addrees: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: '바위',
    },
    {
      id: 3,
      title: '문성자연휴양림2',
      addrees: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: '허허2',
    },
  ],
};

const listSlice = createSlice({
  name: 'formlist',
  initialState,
  reducers: {
    addForm(state, action) {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { addForm } = listSlice.actions;
export default listSlice.reducer;
