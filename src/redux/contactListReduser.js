const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: {
    items:[],
    isLoading: false,
    error: null
  },
  filter: '',
  wordForFilter: '',
 };

const contactListSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts.items = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    filteredContacts: (state, action)=>{
        state.filter = action.payload;
    },
    setWordForFilter: (state, action)=>{
state.wordForFilter = action.payload
    }
  },
});

export const { setContacts, setFilter, filteredContacts, setWordForFilter } = contactListSlice.actions;
export const contactListReducer = contactListSlice.reducer;
