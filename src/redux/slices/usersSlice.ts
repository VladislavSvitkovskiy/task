import { UserInstance } from 'models';

import { createSlice } from '@reduxjs/toolkit';

const initialState: UserInstance[] | [] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersList: (state, action) => {
      return [ ...action.payload ];
    }
   }
});

export const { getUsersList } = usersSlice.actions;

export default usersSlice.reducer;
