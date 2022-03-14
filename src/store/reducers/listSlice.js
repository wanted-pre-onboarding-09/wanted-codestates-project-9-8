import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maxId: 3,
  data: [
    {
      id: 1,
      title: '문성자연휴양림',
      address: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: '해위',
    },
    {
      id: 2,
      title: '문성자연휴양림1',
      address: '충청북도 충주시 노은면 우성1길 191',
      officeNumber: '032-834-2111',
      memo: '바위',
    },
    {
      id: 3,
      title: '문성자연휴양림2',
      address: '충청북도 충주시 노은면 우성1길 191',
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
    createData(state, action) {
      state.data = [...state.data, action.payload];
    },
    updateData(state, action) {
      const updatedData = state.data.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, memo: action.payload.memo };
        }
        return el;
      });
      state.data = updatedData;
    },
    deleteData(state, action) {
      const filterData = state.data.filter((el) => el.id !== action.payload);
      state.data = [...filterData];
    },
  },
});

export const { addForm, createData, updateData, deleteData } =
  listSlice.actions;
export default listSlice.reducer;
