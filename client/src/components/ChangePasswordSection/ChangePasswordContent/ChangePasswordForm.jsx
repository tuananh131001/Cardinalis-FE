import React from 'react';
import { StyledForm } from '@/components/Form/Form.styled';
import { Input } from '@/components/Input/Input';
import { ErrorText } from '@/components/Text/ErrorText';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import ProfileUpdateLabel from '@/components/Form/ProfileUpdateLabel';
import { useForm } from 'react-hook-form';
import StyledButton from '@/components/Button/Button.styled';

const errorPadding = '0 0 1em 0.2em';
const textThemeName = 'homeInput';
const ChangePasswordForm = () => {
  const schema = chooseInputSchema('changePassword');
  const defaultValues = {
    oldPassword: '',
    currentPassword: '',
    confirmPassword: ''
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });
  const onSubmitClick = (data) => {
    // delete password and confirmPassword if user not input
    // console.log(data);
    // dispatch(getUserInfo(data));
    // mutate(data);

    // // back after finishing update
    // if (location.pathname === `/${UPDATE_PROFILE_PATH}`) {
    //   navigate(-1);
    // } else {
    //   closeAction();
    // }
    console.log('Password change section', data);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmitClick)}
      padding="0 var(--horizontal-spaces)"
      height="auto">
      <ProfileUpdateLabel className="label" text="Old Password" htmlFor="updateProfilePassword" />
      <Input
        id="updateProfilePassword"
        inputType="text"
        type="password"
        inputThemeName={textThemeName}
        placeholder="Old Password"
        {...register('oldPassword')}
      />
      <ErrorText errors={errors.oldPassword?.message} padding={errorPadding} />

      {/* new password */}
      <ProfileUpdateLabel text="Current Password" htmlFor="updateProfileNewPassword" />
      <Input
        type="password"
        id="updateProfileNewPassword"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Current Password"
        {...register('currentPassword')}
      />
      <ErrorText errors={errors.currentPassword?.message} padding={errorPadding} />

      {/* confirm password */}
      <ProfileUpdateLabel text="Confirm Password" htmlFor="updateProfileConfirmPassword" />
      <Input
        type="password"
        id="updateProfileConfirmPassword"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="Confirm Password"
        {...register('confirmPassword')}
      />
      <ErrorText errors={errors.confirmPassword?.message} padding={errorPadding} />

      {/* submit */}
      <StyledButton type="submit" buttonThemeName="primaryButton">
        Change Password
      </StyledButton>
    </StyledForm>
  );
};

ChangePasswordForm.propTypes = {};

export default ChangePasswordForm;
