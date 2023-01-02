import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';
import { Input } from '@/components/Input/Input';
import { ErrorText } from '@/components/Text/ErrorText';
import StyledButton from '@/components/Button/Button.styled';
import Text from '@/components/Text/Text';
import DateInput from '@/components/Input/DateInput';
import { BiImageAdd } from 'react-icons/bi';
import { StyledInputContainer } from '@/components/Input/Input.styled';

const errorPadding = '0 0 1em 0.2em';
function UpdateProfileForm({ user, ...props }) {
  const schema = chooseInputSchema('updateProfile');
  const defaultValues = {
    name: user.name,
    bio: user.bio ?? null,
    location: user.location ?? null,
    website: user.website ?? null,
    dob: user.dob ?? null // if user.dob is null, set default value to null
  };

  //   const user = useSelector((state) => state.user);
  //   console.log(user);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });
  //   const { mutate, isError, error, isSuccess } = useSignIn(reset);
  //   const dispatch = useDispatch();

  // submit function
  const onSubmitClick = (data) => {
    console.log('click');
    console.log(data);
  };

  return (
    <StyledForm {...props}>
      {/* Image */}
      <Input inputType="image" inputThemeName="loginInput" id="updateProfileAvatar" isDisplay={false}>{<BiImageAdd />}</Input>
      {/* Name */}
      <ProfileUpdateLabel text="Name" htmlFor="updateProfileName" />
      <Input
        id="updateProfileName"
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Name"
        {...register('name')}
      />
      <ErrorText errors={errors.name?.message} padding={errorPadding} />

      {/* Bio */}
      <ProfileUpdateLabel text="Bio" htmlFor="updateProfileBio" />
      <Input
        id="updateProfileBio"
        inputType="textarea"
        inputThemeName="loginInput"
        placeholder="Bio"
        {...register('bio')}
      />
      <ErrorText errors={errors.bio?.message} padding={errorPadding} />

      {/* Location */}
      <ProfileUpdateLabel text="Location" htmlFor="updateProfileLocation" />
      <Input
        id="updateProfileLocation"
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Location"
        {...register('location')}
      />
      <ErrorText errors={errors.location?.message} padding={errorPadding} />

      {/* Website */}
      <ProfileUpdateLabel text="Website" htmlFor="updateProfileWebsite" />
      <Input
        id="updateProfileWebsite"
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Website"
        {...register('website')}
      />
      <ErrorText errors={errors.website?.message} padding={errorPadding} />

      {/* Date of Birth */}
      <DateInput
        inputThemeName="loginInput"
        name="dob"
        control={control}
        errors={errors.dob?.message}
      />
      <ErrorText errors={errors.dob?.message} padding={errorPadding} />

      <StyledButton
        type="submit"
        buttonThemeName="primaryButton"
        onClick={handleSubmit(onSubmitClick)}>
        Submit
      </StyledButton>
    </StyledForm>
  );
}
const ProfileUpdateLabel = ({ text, htmlFor, ...props }) => (
  <Text
    {...props}
    type="label"
    textThemeName="subText"
    text={text}
    txtAlign="left"
    htmlFor={htmlFor}
  />
);

UpdateProfileForm.propTypes = {
  user: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default UpdateProfileForm;
