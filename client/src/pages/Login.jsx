// import { login } from '@/features/userSlice';
import LoginForm from '@/components/Form/LoginForm';
// import { useDispatch } from 'react-redux';

function Login() {
  // const dispatch = useDispatch();
  // const handleOnClick = () => {
  //   dispatch(login(user));
  // };

  return (
    <>
      <LoginForm gridArea="form" />
    </>
  );
}

export default Login;
