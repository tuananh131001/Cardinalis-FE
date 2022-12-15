import axios from 'axios';
import jwt_decode from 'jwt-decode';

const userApi = axios.create({
  baseURL: 'http://localhost:9002/'
});

const registerUser = (user) => userApi.post('user/register', user).then((res) => res.data);

const signIn = ({ username, password }) =>
  userApi.post('auth/login', { username, password }).then((res) => {
    const token = res.data.token;
    const user = jwt_decode(token);
    console.log(token);
    console.log(user);
  });

const updateProfile = ({ data, id }) => userApi.put('user', { data, id }).then((res) => res.data);

export { registerUser, signIn, updateProfile };
