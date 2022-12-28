import { createSlice } from '@reduxjs/toolkit';

// Declare the initial value for item
const initialState = {
  isAuthenticated: false,
  userToken: null,
  user: {
    username: '',
    avatar: '',
    email: ''
  }
};

// Slice function to extract reducer functions
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userToken = action.payload.userToken;
      state.user.username = action.payload.user.username;
    },
    logout: () => {
      localStorage.removeItem('userToken');
      return initialState;
    },
    getUserInfo: (state, action) => {
      state.user.avatar = action.payload.avatar;
      state.user.email = action.payload.email;
    }
  }
});

export default userSlice.reducer;
export const { login, getToken } = userSlice.actions;
