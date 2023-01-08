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
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import CustomizedSnackbars from '@/components/Snackbar/Snackbar';
import { useEffect, useState } from 'react';
import { isEmptyObject } from '@/helpers/HandleObject';
import ImageProfile from '@/components/ProfileSection/ProfileContent/ImageProfile';
import Button from '@/components/Button/Button';
import { useChange } from '@/hooks/useChange';

const errorPadding = '0 0 1em 0.2em';
const bckHeight = '15em';
const avatarSize = '9em';
const textThemeName = 'homeInput';
function UpdateProfileForm({ user, closeAction, ...props }) {
  const schema = chooseInputSchema('updateProfile');
  // const {value: message, onSetNewValue: setMessage} = useChange("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('message');

  const defaultValues = {
    banner: user.banner,
    avatar: user.avatar,
    name: user.name,
    bio: user.bio ?? null,
    location: user.location ?? null,
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
  const { value: showDate, onToggle: toggleShowDate } = useChange(false);
  //   const { mutate, isError, error, isSuccess } = useSignIn(reset);
  //   const dispatch = useDispatch();

  useEffect(() => {
    if (isEmptyObject(errors)) {
      setIsOpen(false);
      setMessage('');
    } else {
      let errorsName = Object.keys(errors)[0];
      setMessage(errors[errorsName].message);
      setIsOpen(true);
    }
  }, [errors]);

  // submit function
  const onSubmitClick = (isClose, isEditDate, event) => (data) => {
    if (isClose) {
      closeAction();
    } else if (isEditDate) {
      console.log('yes');
      toggleShowDate(event);
    } else {
      console.log('click');
      console.log(data);
      // if data valid, send to server + close modal
      closeAction();
    }
  };

  return (
    <StyledForm
      {...props}
      onSubmit={handleSubmit(onSubmitClick)}
      padding={`calc(${bckHeight} + ${avatarSize} / 1.5) var(--horizontal-spaces) 0`}
      jc="flex-start">
      <HeaderSection
        content="Update Profile"
        isFixedPosition={true}
        leftType="close"
        rightType="none"
        backgroundStyle={2}
        onClick={onSubmitClick(true)}
        zIndex={2}
      />
      {/* Image */}
      <ImageProfile
        user={user}
        bckHeight={bckHeight}
        avatarSize={avatarSize}
        isInput={true}
        avatarName="avatar"
        bannerName="banner"
        register={register}
      />

      {/* Name */}
      <ProfileUpdateLabel text="Name" htmlFor="updateProfileName" />
      <Input
        id="updateProfileName"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Name"
        {...register('name')}
      />
      <ErrorText errors={errors.name?.message} padding={errorPadding} />

      {/* Bio */}
      <ProfileUpdateLabel text="Bio" htmlFor="updateProfileBio" />
      <Input
        id="updateProfileBio"
        inputType="textarea"
        inputThemeName={textThemeName}
        placeholder="Bio"
        {...register('bio')}
      />
      <ErrorText errors={errors.bio?.message} padding={errorPadding} />

      {/* Location */}
      <ProfileUpdateLabel text="Location" htmlFor="updateProfileLocation" />
      <Input
        id="updateProfileLocation"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Location"
        {...register('location')}
      />
      <ErrorText errors={errors.location?.message} padding={errorPadding} />

      {/* Date of Birth */}
      <div className="flex-row">
        <ProfileUpdateLabel
          className="label"
          text="Date of Birth"
          htmlFor="updateProfileLocation"
        />
        <Button
          className="button"
          width="auto"
          buttonType="link"
          onClick={onSubmitClick(false, true)}>
          Edit
        </Button>
      </div>

      <div className="flex-row">
        {showDate && <DateInput inputThemeName={textThemeName} name="dob" control={control} />}
      </div>

      {/* Error message */}
      <CustomizedSnackbars
        type="error"
        verticalPosition="bottom"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />

      <StyledButton type="submit" buttonThemeName="primaryButton">
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
  closeAction: PropTypes.func,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
ProfileUpdateLabel.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default UpdateProfileForm;
