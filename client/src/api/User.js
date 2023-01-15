import axios from 'axios';
import {
  API_ORIGIN,
  LOGIN_ENDPOINT,
  USER_ENDPOINT,
  REGISTER_ENDPOINT,
  GET_USER_ENDPOINT,
  USER_FOLLOW_ENDPOINT,
  USER_FOLLOWING_ENDPOINT,
  USER_FOLLOWERS_ENDPOINT,
  USER_SEARCH_ENDPOINT
} from '@/assets/constantEnv';
const userApi = axios.create({
  baseURL: API_ORIGIN
});

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    'Content-Type': 'application/json'
  }
};

const registerUser = (user) => userApi.post(REGISTER_ENDPOINT, user).then((res) => res.data);

const signIn = ({ email, password }) =>
  userApi.post(LOGIN_ENDPOINT, { email, password }).then((res) => {
    const token = res.data.data.token;
    localStorage.setItem('userToken', token);
    localStorage.setItem('username', res.data.data.user.username);
  });

const updateProfile = ({ data, id }) =>
  userApi.put(USER_ENDPOINT, { data, id }).then((res) => res.data);

const getUserInfo = (username) => {
  return userApi.get(`${GET_USER_ENDPOINT}${username}`).then((res) => res.data);
};

const followUser = (id) =>
  userApi
    .get(`${USER_FOLLOW_ENDPOINT}?userId=${id}`, {
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
  updateProfile,
  getUserInfo,
  searchUsers,
  getUserFollowers,
  getUserFollowing,
  followUser
};
