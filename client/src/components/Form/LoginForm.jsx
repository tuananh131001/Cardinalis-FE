import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';
import { Input } from '@/components/Input/Input';
import { ErrorText } from '@/components/Text/ErrorText';
import StyledButton from '@/components/Button/Button.styled';
import { useChange } from '@/hooks/useChange';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';
import { useSignIn } from '@/hooks/useUser';
import { useNavigate } from 'react-router-dom';
import CustomizedSnackbars from '@/components/Snackbar/Snackbar';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '@/features/userSlice';
import { HOME_PATH } from '@/assets/Constant';
import OAuth2Button from '@/components/Button/OAuth2Button';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import uuid from 'react-uuid';

function LoginForm({ ...props }) {
  const schema = chooseInputSchema('login');
  const navigate = useNavigate();
  const defaultValues = {
    email: '',
    password: ''
  };

  const user = useSelector((state) => state.user);
  console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });
  const { value: hidePassword, onToggle: togglePassword } = useChange(true);
  const { mutate, isError, error } = useSignIn(reset);

  const dispatch = useDispatch();

  // submit function
  const onSubmitClick = (data) => {
    mutate(data, {
      onSuccess: () => {
        const userToken = localStorage.getItem('userToken');
        const username = localStorage.getItem('username');
        const authData = {
          user: {
            username: username
          },
          userToken: userToken
        };
        dispatch(login(authData));
        navigate(HOME_PATH, { replace: true });
      }
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitClick)} {...props}>
      <Input
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Enter Email..."
        {...register('email')}
      />
      <ErrorText errors={errors.email?.message} />
      <Input
        type={hidePassword ? 'password' : 'text'}
        inputType="textIcon"
        inputThemeName="loginInput"
        placeholder="Enter password..."
        onClick={togglePassword}
        {...register('password')}>
        {hidePassword ? <FaEye /> : <RiEyeCloseFill />}
      </Input>
      <ErrorText errors={errors.password?.message} />
      <StyledButton type="submit" buttonThemeName="primaryButton">
        Submit
      </StyledButton>
      <div className="flex-col">
        <OAuth2Button
          href="https://cardinalis-be.live/oauth2/authorization/google"
          text={[
            <FcGoogle key={uuid()} style={{ fontSize: 'var(--font-size-md)' }} />,
            'Login with Google'
          ]}
        />
        <OAuth2Button
          href="https://cardinalis-be.live/oauth2/authorization/facebook"
          text={[
            <SiFacebook key={uuid()} style={{ fontSize: 'var(--font-size-md)' }} />,
            'Login with Facebook'
          ]}
          className="oauth"
        />
      </div>
      {isError && (
        <CustomizedSnackbars
          type="error"
          message={error?.response?.data?.errors_message ?? 'Internal Server Error'}
        />
      )}
    </StyledForm>
  );
}

LoginForm.propTypes = {
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default LoginForm;
