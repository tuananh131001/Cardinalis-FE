import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';
import { Input } from '@/components/Input/Input';
import { ErrorText } from '@/components/Text/ErrorText';
import StyledButton from '@/components/Button/Button.styled';

function UpdateProfileForm({ user, ...props }) {
  const schema = chooseInputSchema('register');
  const defaultValues = {
    name: user.name
  };

  //   const user = useSelector((state) => state.user);
  //   console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });
  //   const { mutate, isError, error, isSuccess } = useSignIn(reset);
  //   const dispatch = useDispatch();

  // submit function
  const onSubmitClick = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitClick)} {...props}>
      <Input
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Name"
        {...register('name')}
      />
      <ErrorText errors={errors.name?.message} />
      <StyledButton type="submit" buttonThemeName="primaryButton">
        Submit
      </StyledButton>
    </StyledForm>
  );
}

UpdateProfileForm.propTypes = {
  user: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default UpdateProfileForm;
