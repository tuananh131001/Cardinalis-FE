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
import { HOME_PATH } from '@/assets/Constant';

function LoginForm({ ...props }) {
  const schema = chooseInputSchema('login');
  const navigate = useNavigate();
  const defaultValues = {
    username: '',
    password: ''
  };

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
  const { mutate, isError, error, isSuccess } = useSignIn(reset);

  // submit function
  const onSubmitClick = (data) => {
    mutate(data);
  };

  if (isSuccess) {
    navigate(`/${HOME_PATH}`, { replace: true });
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitClick)} {...props}>
      <Input
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Enter Username..."
        {...register('username')}
      />
      <ErrorText errors={errors.username?.message} />
      <Input
        type={hidePassword ? 'password' : 'text'}
        inputType="text"
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
