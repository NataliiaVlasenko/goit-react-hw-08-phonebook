import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getFilter } = filterSlice.actions;