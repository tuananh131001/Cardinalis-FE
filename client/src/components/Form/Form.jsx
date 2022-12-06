// https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
// https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/HandlingInput';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input/Input';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';
import { useChange } from '@/hooks/useChange';
import StyledButton from '@/components/Button/Button.styled';

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
    formState: { errors },
    setValue
  } = useForm({
    // integration btw yup and form to make it work
    resolver: yupResolver(schema)
  });

  // submit function
  const onSubmitClick = (data) => {
    console.log('sdn');
    console.log(data);
  };

  // click remove all input
  const onClickRemoveAll = (event, inputName) => {
    // prevent submit action
    event.preventDefault();
    setValue(inputName, '');
  };
  const { value: hidePassword, onToggle: togglePassword } = useChange(true);

  return (
    <form action="" onSubmit={handleSubmit(onSubmitClick)}>
      {type == 'login' ? (
        <>
          <Input
            type="email"
            inputType="textIcon"
            inputName="loginInput"
            placeholder="Enter Email..."
            {...register('emailInput')}
            onClick={(event) => onClickRemoveAll(event, 'emailInput')}>
            <AiOutlineCloseCircle />
          </Input>
          <p>{errors.emailInput?.message ?? <EmptySpace />}</p>
          <Input
            type={hidePassword ? 'password' : 'text'}
            inputType="textIcon"
            inputName="loginInput"
            placeholder="Enter Password..."
            onClick={togglePassword}
            {...register('passwordInput')}>
            {hidePassword ? <FaEye /> : <RiEyeCloseFill />}
          </Input>
          <p>{errors.passwordInput?.message ?? <EmptySpace />}</p>
        </>
      ) : (
        <>
          <Input
            type="text"
            inputType="text"
            inputName="loginInput"
            placeholder="Enter Email..."
            {...register('emailInput')}
          />
          <p>{errors.emailInput?.message ?? <EmptySpace />}</p>
          <Input
            type="tel"
            inputType="text"
            inputName="loginInput"
            placeholder="Enter Phone Number..."
            {...register('phoneInput')}
          />
          <p>{errors.phoneInput?.message ?? <EmptySpace />}</p>
          <Input
            type="password"
            inputType="text"
            inputName="loginInput"
            placeholder="Enter Password..."
            {...register('passwordInput')}
          />
          <p>{errors.passwordInput?.message ?? <EmptySpace />}</p>
          <Input
            type="password"
            inputType="text"
            inputName="loginInput"
            placeholder="Confirm Password"
            {...register('confirmPasswordInput')}
          />
          <p>{errors.confirmPasswordInput?.message ?? <EmptySpace />}</p>
        </>
      )}
      <StyledButton type="submit">Submit</StyledButton>
    </form>
  );
};

function EmptySpace() {
  return <span>&nbsp;&nbsp;</span>;
}

Form.propTypes = {
  type: PropTypes.string,
  onSubmit: PropTypes.func
};

export default Form;
