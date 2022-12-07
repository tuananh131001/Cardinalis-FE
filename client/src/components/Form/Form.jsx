// https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
// https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/HandlingInput';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input/Input';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';
import { useChange } from '@/hooks/useChange';
import StyledButton from '@/components/Button/Button.styled';
import { StyledForm } from './Form.styled';
import Text from '@/components/Text/Text';

export const Form = ({ type }) => {
  /**
   * @description - This component for form with validation
   * @param {string} type - type of form: login | register
   * @param {function} onSubmit - function for onSubmit event
   */
  const schema = chooseInputSchema(type);

  // register for react hook form know which one needs validation -> pass as attributes inside object
  // formState handle errors from yup
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    // integration btw yup and form to make it work
    resolver: yupResolver(schema)
  });

  // submit function
  const onSubmitClick = (data) => {
    console.log('sdn');
    console.log(data);
  };

  const { value: hidePassword, onToggle: togglePassword } = useChange(true);

  return (
    <StyledForm action="" onSubmit={handleSubmit(onSubmitClick)}>
      {type == 'login' ? (
        <>
          <Input
            type="text"
            inputType="textIcon"
            inputThemeName="loginInput"
            placeholder="Enter Email..."
            {...register('emailInput')}
          />
          <ErrorText errors={errors.emailInput?.message} />
          <Input
            type={hidePassword ? 'password' : 'text'}
            inputType="textIcon"
            inputThemeName="loginInput"
            placeholder="Enter Password..."
            onClick={togglePassword}
            {...register('passwordInput')}>
            {hidePassword ? <FaEye /> : <RiEyeCloseFill />}
          </Input>
          <ErrorText errors={errors.passwordInput?.message} />
        </>
      ) : (
        <>
          <Input
            type="text"
            inputType="text"
            inputThemeName="loginInput"
            placeholder="Enter Email..."
            {...register('emailInput')}
          />
          <ErrorText errors={errors.emailInput?.message} />
          <Input
            inputType="text"
            inputThemeName="loginInput"
            placeholder="Enter Phone Number..."
            {...register('phoneInput')}
          />
          <ErrorText errors={errors.phoneInput?.message} />
          <Input
            type="password"
            inputType="text"
            inputThemeName="loginInput"
            placeholder="Enter Password..."
            {...register('passwordInput')}
          />
          <ErrorText errors={errors.passwordInput?.message} />
          <Input
            type="password"
            inputType="text"
            inputThemeName="loginInput"
            placeholder="Confirm Password"
            {...register('confirmPasswordInput')}
          />
          <ErrorText errors={errors.confirmPasswordInput?.message} />
        </>
      )}
      <StyledButton type="submit" buttonThemeName="primaryButton">
        Submit
      </StyledButton>
    </StyledForm>
  );
};

function ErrorText({ errors }) {
  return (
    <Text
      type="p"
      align="left"
      textThemeName="errorText"
      text={errors ?? <span>&nbsp;&nbsp;</span>}
    />
  );
}

Form.propTypes = {
  type: PropTypes.string,
  onSubmit: PropTypes.func
};
ErrorText.propTypes = {
  errors: PropTypes.string
};

export default Form;
