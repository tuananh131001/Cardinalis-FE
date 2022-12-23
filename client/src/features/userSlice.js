import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  error: null,
  success: false
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action) => {
      state.userInfo = action.payload;
    }
  }
});

export default userSlice.reducer;
export const { login, signup } = userSlice.actions;
