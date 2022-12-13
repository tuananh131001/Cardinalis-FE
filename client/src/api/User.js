import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:9002'
});

const registerUser = (user) => userApi.post('/user/register', user).then((res) => res.data);

const signUp = ({ username, password }) => userApi.post('signIn', { username, password });

const updateProfile = ({ data, id }) => userApi.put('user', { data, id }).then((res) => res.data);

export { registerUser, signUp, updateProfile };
