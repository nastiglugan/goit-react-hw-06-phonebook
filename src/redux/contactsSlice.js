import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const constactsInitialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: constactsInitialState,
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    // prepare(text) {
    //   return {
    //     payload: {
    //       text,
    //       id: nanoid(),
    //     },
    //   };
    // },
    deleteContacts(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
