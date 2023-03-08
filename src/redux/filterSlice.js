import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
