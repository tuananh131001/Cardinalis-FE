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
import { useUpdateProfile } from '@/hooks/useUser';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '@/features/userSlice';

const errorPadding = '0 0 1em 0.2em';
const textThemeName = 'homeInput';
function UpdateProfileForm({ user, closeAction, isInModal, ...props }) {
  const schema = chooseInputSchema('updateProfile');
  // const {value: message, onSetNewValue: setMessage} = useChange("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('message');
  const defaultValues = {
    username: user?.name,
    email: user?.email,
    avatar: user?.avatar,
    bio: user?.bio,
    country: user?.country,
    countryCode: user?.countryCode,
    createdAt: user?.createdAt,
    dateOfBirth: user?.dateOfBirth,
    fullName: user?.fullName,
    location: user?.location,
    phone: user?.phone,
    notificationsCount: user?.notificationsCount,
    gender: user?.gender
  };

  const { mutate, isSuccess } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    control,
    reset,
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
  const onSubmitClick = (data) => {
    console.log(data);
    dispatch(getUserInfo(data));
    mutate(data);
    reset();
  };
  const clickEdit = (event) => {
    event.preventDefault();
    toggleShowDate(event);
    console.log('Click Edit Date');
  };

  return (
    <StyledForm {...props} onSubmit={handleSubmit(onSubmitClick)} padding="2em 0" jc="flex-start">
      {isInModal && (
        <HeaderSection
          content="Update Profile"
          isFixedPosition={true}
          leftType="close"
          rightType="none"
          backgroundStyle={2}
          onClick={(event) => closeAction(event)}
          zIndex={2}
        />
      )}
      {/* Image */}
      <ProfileUpdateLabel text="Banner" htmlFor="updateProfileName" />
      <Input
        id="updateProfileName"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Banner"
        {...register('banner')}
      />
      <ErrorText errors={errors.name?.banner} padding={errorPadding} />

      <ProfileUpdateLabel text="Avatar" htmlFor="updateProfileName" />
      <Input
        id="updateProfileName"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Avatar"
        {...register('avatar')}
      />
      <ErrorText errors={errors.name?.banner} padding={errorPadding} />

      {/* Name */}
      <ProfileUpdateLabel text="Name" htmlFor="updateProfileName" />
      <Input
        id="updateProfileName"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Name"
        {...register('username')}
      />
      <ErrorText errors={errors.name?.message} padding={errorPadding} />

      {/* Gender */}
      <ProfileUpdateLabel text="Gender" padding="0.5em 0" />
      <div className="flex-row">
        <Input
          id="updateProfileMale"
          type="radio"
          value="Male"
          inputType="text"
          inputThemeName={textThemeName}
          {...register('gender')}
        />
        <ProfileUpdateLabel text="Male" htmlFor="updateProfileMale" className="label" />
      </div>
      <div className="flex-row">
        <Input
          id="updateProfileFemale"
          type="radio"
          value="Female"
          inputType="text"
          inputThemeName={textThemeName}
          {...register('gender')}
        />
        <ProfileUpdateLabel text="Female" htmlFor="updateProfileFemale" className="label" />
      </div>
      <div className="flex-row">
        <Input
          id="updateProfileGenderOther"
          type="radio"
          value="Other"
          inputType="text"
          inputThemeName={textThemeName}
          {...register('gender')}
        />
        <ProfileUpdateLabel text="Other" htmlFor="updateProfileGenderOther" className="label" />
      </div>

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

      {/* Website */}
      <ProfileUpdateLabel text="Website" htmlFor="updateProfileWebsite" />
      <Input
        id="updateProfileWebsite"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Website"
        {...register('website')}
      />
      <ErrorText errors={errors.website?.message} padding={errorPadding} />

      {/* Date of Birth */}
      <div className="flex-row">
        <ProfileUpdateLabel
          className="label"
          text="Date of Birth"
          htmlFor="updateProfileLocation"
        />
        <Button className="button" width="auto" buttonType="link" onClick={clickEdit}>
          Edit
        </Button>
      </div>

      <div className="flex-row">
        {showDate && (
          <DateInput inputThemeName={textThemeName} name="dateOfBirth" control={control} />
        )}
      </div>
      {isSuccess && (
        <CustomizedSnackbars
          type="success"
          verticalPosition="top"
          message="You have successfully updated your profile!"
        />
      )}
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
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  isInModal: PropTypes.bool
};
ProfileUpdateLabel.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default UpdateProfileForm;