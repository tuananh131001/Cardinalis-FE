import axios from 'axios';
import {
  API_ORIGIN,
  LOGIN_ENDPOINT,
  GOOGLE_LOGIN_ENDPOINT,
  FACEBOOK_LOGIN_ENDPOINT,
  USER_ENDPOINT,
  REGISTER_ENDPOINT,
  GET_USER_ENDPOINT,
  USER_FOLLOWING_ENDPOINT,
  USER_FOLLOWERS_ENDPOINT,
  USER_SEARCH_ENDPOINT,
  CHANGE_PASSWORD
} from '@/assets/constantEnv';
const userApi = axios.create({
  baseURL: API_ORIGIN
});

const getOauthUrl = (provider) => {
  if (provider == 'google') {
    return API_ORIGIN + GOOGLE_LOGIN_ENDPOINT;
  } else {
    return API_ORIGIN + FACEBOOK_LOGIN_ENDPOINT;
  }
};

const registerUser = (user) => userApi.post(REGISTER_ENDPOINT, user).then((res) => res.data);

const signIn = ({ email, password }) =>
  userApi.post(LOGIN_ENDPOINT, { email, password }).then((res) => {
    const token = res.data.data.token;
    localStorage.setItem('userToken', token);
    localStorage.setItem('username', res.data.data.user.username);
  });

const signInOauth2 = (dataToken) => {
  const token = dataToken.token;
  localStorage.setItem('userToken', token);
  if (dataToken.type == 'facebook') {
    axios
      .get('https://graph.facebook.com/me', {
        params: {
          fields: ['id', 'email', 'first_name', 'last_name'].join(','),
          access_token: token
        }
      })
      .then((res) => {
        localStorage.setItem('username', res.email);
      });
  } else {
    axios
      .get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        localStorage.setItem('username', res.email);
      });
  }
};

const changePassword = (data) =>
  userApi
    .put(CHANGE_PASSWORD, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.data);

const updateProfile = (data) =>
  userApi
    .put(USER_ENDPOINT, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.data);

const getUserInfo = (username) => {
  return userApi.get(`${GET_USER_ENDPOINT}${username}`).then((res) => res.data);
};

const getUserByEmail = (email) => {
  return userApi.get(`${GET_USER_ENDPOINT}email=${email}`).then((res) => res.data);
};

const followUser = (id) =>
  userApi
    .get(`/user/follow?userId=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.data);

const getUserFollowers = (id) =>
  userApi
    .get(`${USER_FOLLOWERS_ENDPOINT}?userId=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.data);

const getUserFollowing = (id) =>
  userApi
    .get(`${USER_FOLLOWING_ENDPOINT}?userId=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.data);

const searchUsers = (username) =>
  userApi.get(`${USER_SEARCH_ENDPOINT}?username=${username}`).then((res) => res.data);

export {
  registerUser,
  signIn,
  signInOauth2,
  getOauthUrl,
  updateProfile,
  getUserInfo,
  searchUsers,
  getUserFollowers,
  getUserFollowing,
  followUser,
  getUserByEmail,
  changePassword
};
