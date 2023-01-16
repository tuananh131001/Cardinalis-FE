import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input/Input';
import { StyledForm } from './Form.styled';
import { useRegister } from '@/hooks/useUser';
import { ErrorText } from '@/components/Text/ErrorText';
import CustomizedSnackbars from '@/components/Snackbar/Snackbar';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PATH } from '@/assets/Constant';
import Button from '@/components/Button/Button';
import OAuth2Button from '@/components/Button/OAuth2Button';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import uuid from 'react-uuid';
import { getOauthUrl } from '@/api/User';

export const RegisterForm = ({ ...props }) => {
  const schema = chooseInputSchema('register');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });
  const { mutate, isError, isSuccess, error } = useRegister(reset);

  // submit function
  const onSubmitClick = (data) => {
    mutate(data);
    if (isSuccess) {
      navigate(`/${LOGIN_PATH}`, { replace: true });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitClick)} {...props}>
      <Input
        type="text"
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Enter Email..."
        {...register('email')}
      />
      <ErrorText errors={errors.email?.message} />
      <Input
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Enter Username..."
        {...register('username')}
      />
      <ErrorText errors={errors.username?.message} />
      <Input
        type="password"
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Enter Password..."
        {...register('password')}
      />
      <ErrorText errors={errors.password?.message} />
      <Input
        type="password"
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
      />
      <ErrorText errors={errors.confirmPassword?.message} />
      <Button type="submit" buttonThemeName="primaryButton">
        Submit
      </Button>
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
      {isSuccess && <CustomizedSnackbars type="success" message="Register successfully" />}
      {isError && (
        <CustomizedSnackbars
          type="error"
          message={error?.response?.data?.message ?? 'Internal Server Error'}
        />
      )}
    </StyledForm>
  );
};

RegisterForm.propTypes = {
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};

export default RegisterForm;
