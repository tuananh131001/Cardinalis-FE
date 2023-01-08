// https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
// https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input/Input';
import StyledButton from '@/components/Button/Button.styled';
import { StyledForm } from './Form.styled';
import { useRegister } from '@/hooks/useUser';
import { ErrorText } from '@/components/Text/ErrorText';
import CustomizedSnackbars from '@/components/Snackbar/Snackbar';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PATH } from '@/assets/Constant';

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
  const onSubmitClick = (type = 'submit') => (data) => {
      if (type == 'submit') {
        delete data.confirmPassword;
        mutate(data);
        if (isSuccess) {
          navigate(`/${LOGIN_PATH}`, { replace: true });
        }
      } else {
        // login github
        console.log('login github');
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
      <StyledButton type="submit" buttonThemeName="primaryButton">
        Submit
      </StyledButton>
      <StyledButton buttonThemeName="primaryButton" onClick={onSubmitClick('loginGithub')}>
        Login using Github
      </StyledButton>
      {isSuccess && <CustomizedSnackbars type="success" message="Register successfully" />}
      {isError && (
        <CustomizedSnackbars
          type="error"
          message={error?.response?.data?.errors_message ?? 'Internal Server Error'}
        />
      )}
    </StyledForm>
  );
};

RegisterForm.propTypes = {
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};

export default RegisterForm;
