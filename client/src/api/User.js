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
const token = localStorage.getItem('userToken');
console.log(token);
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

const signIn = ({ username, password }) =>
  userApi.post(LOGIN_ENDPOINT, { username, password }).then((res) => {
    const token = res?.data?.data?.token;
    console.log(token);
    localStorage.setItem('userToken', token);
  });

const updateProfile = ({ data, id }) =>
  userApi.put(USER_ENDPOINT, { data, id }).then((res) => res.data);

const getUserInfo = (username) => {
  return userApi
    .get(`${GET_USER_ENDPOINT}${username}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.data);
};

const followUser = (users) =>
  userApi.post(USER_FOLLOW_ENDPOINT, users, { headers: headerConfig }).then((res) => res.data);

const unfollowUser = (users) =>
  userApi.delete(USER_FOLLOW_ENDPOINT, users, { headers: headerConfig }).then((res) => res.data);

const getUserFollowers = (id) =>
  userApi
    .get(`${USER_FOLLOW_ENDPOINT}${id}${USER_FOLLOWERS_ENDPOINT}`, { headers: headerConfig })
    .then((res) => res.data);

const getUserFollowing = (id) =>
  userApi
    .get(`${USER_FOLLOW_ENDPOINT}${id}${USER_FOLLOWING_ENDPOINT}`, { headers: headerConfig })
    .then((res) => res.data);

const searchUsers = (username) =>
  userApi
    .get(`${USER_SEARCH_ENDPOINT}?username=${username}`, { headers: headerConfig })
    .then((res) => res.data);

export {
  registerUser,
  signIn,
  updateProfile,
  getUserInfo,
  searchUsers,
  getUserFollowers,
  getUserFollowing,
  followUser,
  unfollowUser
};
