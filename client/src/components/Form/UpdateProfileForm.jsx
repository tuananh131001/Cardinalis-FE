import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';
import { Input } from '@/components/Input/Input';
import { ErrorText } from '@/components/Text/ErrorText';
import StyledButton from '@/components/Button/Button.styled';
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
import { useLocation } from 'react-router-dom';
import { UPDATE_PROFILE_PATH } from '@/assets/Constant';
import { useNavigate } from 'react-router-dom';
import { CHANGE_PASSWORD_PATH } from '@/assets/Constant';
import ProfileUpdateLabel from './ProfileUpdateLabel';

const errorPadding = '0 0 1em 0.2em';
const bckHeight = '15em';
const avatarSize = '9em';
const textThemeName = 'homeInput';
function UpdateProfileForm({ user, closeAction, isInModal, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  const schema = chooseInputSchema('updateProfile');
  // const {value: message, onSetNewValue: setMessage} = useChange("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('message');
  const defaultValues = {
    username: user?.username,
    email: user?.email,
    avatar: user?.avatar,
    banner: user?.banner,
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
  const { user: thisUser } = useSelector((state) => state.user);
  console.log('User In Update Form', thisUser);
  const { mutate } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });
  const { value: showAvatarLink, onToggle: toggleShowAvatar } = useChange(false);
  const { value: showBannerLink, onToggle: toggleShowBanner } = useChange(false);
  const { value: showDate, onToggle: toggleShowDate } = useChange(false);
  const { value: avatarLink, onSetNewValue: changeAvatar } = useChange(defaultValues.avatar);
  const { value: bannerLink, onSetNewValue: changeBanner } = useChange(defaultValues.banner);
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

    // back after finishing update
    if (location.pathname === `/${UPDATE_PROFILE_PATH}`) {
      navigate(-1);
    } else {
      closeAction();
    }
  };
  const clickEdit = (event) => {
    event.preventDefault();
    toggleShowDate(event);
    console.log('Click Edit Date');
  };
  const clickEditPassword = (event) => {
    event.preventDefault();
    navigate(`/${CHANGE_PASSWORD_PATH}`);
  };
  const onChangeImageLink = (event, registerType, type) => {
    if (type === 'avatar') {
      registerType.onChange(event);
      changeAvatar(event.target.value);
    } else {
      registerType.onChange(event);
      changeBanner(event.target.value);
    }
  };

  return (
    <StyledForm
      {...props}
      onSubmit={handleSubmit(onSubmitClick)}
      padding={`calc(${bckHeight} + ${avatarSize} / 1.5) var(--horizontal-spaces) 0`}
      jc="flex-start">
      {isInModal && (
        <HeaderSection
          content="Update Profile"
          isFixedPosition={true}
          leftType="close"
          rightType="none"
          backgroundStyle={2}
          onClick={(event) => closeAction(event)}
          zIndex={10}
        />
      )}
      {/* Image */}
      <ImageProfile
        user={user}
        bckHeight={bckHeight}
        avatarSize={avatarSize}
        isInput={true}
        // for input
        onClickAvatar={toggleShowAvatar}
        onClickBanner={toggleShowBanner}
        avatarContentInput={avatarLink}
        bannerContentInput={bannerLink}
      />

      {/* Avatar */}
      {showAvatarLink && (
        <>
          <ProfileUpdateLabel text="Avatar Link" htmlFor="updateProfileAvatar" />
          <Input
            id="updateProfileAvatar"
            inputType="text"
            inputThemeName={textThemeName}
            placeholder="Avatar Link"
            {...register('avatar')}
            onChange={(event) => onChangeImageLink(event, register('avatar'), 'avatar')}
          />
          <ErrorText errors={errors.avatar?.message} padding={errorPadding} />
        </>
      )}

      {/* Banner */}
      {showBannerLink && (
        <>
          <ProfileUpdateLabel text="Banner Link" htmlFor="updateProfileBanner" />
          <Input
            id="updateProfileBanner"
            inputType="text"
            inputThemeName={textThemeName}
            placeholder="Banner Link"
            {...register('banner')}
            onChange={(event) => onChangeImageLink(event, register('banner'), 'banner')}
          />
          <ErrorText errors={errors.banner?.message} padding={errorPadding} />
        </>
      )}

      {/* Name */}
      <ProfileUpdateLabel text="Full Name" htmlFor="updateProfileName" />
      <Input
        id="updateProfileName"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Full Name"
        {...register('fullName')}
      />
      <ErrorText errors={errors.fullName?.message} padding={errorPadding} />

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

      {/* Password */}
      <div className="flex-row">
        <ProfileUpdateLabel className="label" text="Password" />
        <Button className="button" width="auto" buttonType="link" onClick={clickEditPassword}>
          Edit
        </Button>
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

UpdateProfileForm.propTypes = {
  user: PropTypes.object,
  closeAction: PropTypes.func,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  isInModal: PropTypes.bool
};
export default UpdateProfileForm;
