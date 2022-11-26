import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:5050/user/'
});

const registerUser = (user) => userApi.post('register', user).then((res) => res.data);

const signUp = ({ username, password }) => userApi.post('signIn', { username, password });

const updateProfile = ({ data, id }) => userApi.put('user', { data, id }).then((res) => res.data);

export { registerUser, signUp, updateProfile };
