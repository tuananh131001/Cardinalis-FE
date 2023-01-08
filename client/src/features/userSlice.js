import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

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
      localStorage.removeItem('username');
      return initialState;
    },
    getUserInfo: (state, action) => {
      state.user.avatar = action.payload.avatar;
      state.user.email = action.payload.email;
      state.user.bio = action.payload.bio;
      state.user.banner = action.payload.banner;
      state.user.createdAt = action.payload.createdAt;
      state.user.dateOfBirth = action.payload.dateOfBirth;
      state.user.id = action.payload.id;
      state.user.location = action.payload.location;
      state.user.is_hot_user = action.payload.is_hot_user;
      state.user.country = action.payload.country;
      state.user.countryCode = action.payload.countryCode;
      state.user.fullName = action.payload.fullName;
      state.user.website = action.payload.website;
      state.user.phone = action.payload.phone;
      state.user.notificationsCount = action.payload.notificationsCount;
      state.user.gender = action.payload.gender;
    }
  },
  extraReducers: {
    [PURGE]: () => initialState
  }
});

export default userSlice.reducer;
export const { login, getToken, getUserInfo, logout } = userSlice.actions;
