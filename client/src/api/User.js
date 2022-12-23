import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { API_ORIGIN, LOGIN_ENDPOINT, USER_ENDPOINT, REGISTER_ENDPOINT } from '@/assets/constantEnv';

const userApi = axios.create({
  baseURL: API_ORIGIN
});

const registerUser = (user) => userApi.post(REGISTER_ENDPOINT, user).then((res) => res.data);

const signIn = ({ username, password }) =>
  userApi.post(LOGIN_ENDPOINT, { username, password }).then((res) => {
    const token = res?.data?.data?.token;
    const user = jwt_decode(token);
    console.log(user);
  });

const updateProfile = ({ data, id }) =>
  userApi.put(USER_ENDPOINT, { data, id }).then((res) => res.data);

export { registerUser, signIn, updateProfile };
