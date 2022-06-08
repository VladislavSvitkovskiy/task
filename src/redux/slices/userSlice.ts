import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: number
  firstName: string
  lastName: string
  username?: string
  email: string
}

const initialState: UserState | {} = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      return {
        ...state, ...action.payload
      };
    }
  }
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
