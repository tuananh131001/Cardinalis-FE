import { createSlice } from '@reduxjs/toolkit';

// Declare the initial value for item
const initialState = {
  isAuthenticated: false,
  userToken: null,
  user: {
    username: '',
    avatar: '',
    email: '',
    bio: '',
    banner: '',
    created_at: '',
    dateOfBirth: '',
    id: '',
    location: '',
    is_hot_user: ''
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
      state.user.bio = action.payload.bio;
      state.user.banner = action.payload.banner;
      state.user.created_at = action.payload.created_at;
      state.user.dateOfBirth = action.payload.dateOfBirth;
      state.user.id = action.payload.id;
      state.user.location = action.payload.location;
      state.user.is_hot_user = action.payload.is_hot_user;
    }
  }
});

export default userSlice.reducer;
export const { login, getToken, getUserInfo, logout } = userSlice.actions;
