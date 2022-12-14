import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';
import { Input } from 'components/Input/Input';
import { ErrorText } from '@/components/Text/ErrorText';
import StyledButton from '@/components/Button/Button.styled';
import { useChange } from '@/hooks/useChange';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';

function LoginForm({ ...props }) {
  const schema = chooseInputSchema('login');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    // integration btw yup and form to make it work
    resolver: yupResolver(schema)
  });
  const { value: hidePassword, onToggle: togglePassword } = useChange(true);
  // submit function
  const onSubmitClick = (data) => {
    console.log('sdn');
    console.log(data);
    
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitClick)} {...props}>
      <Input
        type="text"
        inputType="textIcon"
        inputThemeName="loginInput"
        placeholder="Enter Email..."
        {...register('email')}
      />
      <ErrorText errors={errors.email?.message} />
      <Input
        type={hidePassword ? 'password' : 'text'}
        inputType="textIcon"
        inputThemeName="loginInput"
        placeholder="Enter Password..."
        onClick={togglePassword}
        {...register('password')}>
        {hidePassword ? <FaEye /> : <RiEyeCloseFill />}
      </Input>
      <ErrorText errors={errors.password?.message} />
      <StyledButton type="submit" buttonThemeName="primaryButton">
        Submit
      </StyledButton>
    </StyledForm>
  );
}

LoginForm.PropTypes = {
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default LoginForm;
