import React from 'react';
import { StyledForm } from '@/components/Form/Form.styled';
import { Input } from '@/components/Input/Input';
import { ErrorText } from '@/components/Text/ErrorText';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import ProfileUpdateLabel from '@/components/Form/ProfileUpdateLabel';
import { useForm } from 'react-hook-form';
import StyledButton from '@/components/Button/Button.styled';
import { useChangePassword } from '@/hooks/useUser';
import CustomizedSnackbars from '@/components/Snackbar/Snackbar';

const errorPadding = '0 0 1em 0.2em';
const textThemeName = 'homeInput';
const ChangePasswordForm = () => {
  const schema = chooseInputSchema('changePassword');
  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
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
  const { mutate, isSuccess, isError, error } = useChangePassword(reset);

  const onSubmitClick = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitClick)} padding="0 var(--horizontal-spaces)">
      <ProfileUpdateLabel
        className="label"
        text="Current Password"
        htmlFor="updateProfilePassword"
      />
      <Input
        id="updateProfilePassword"
        inputType="text"
        type="password"
        inputThemeName={textThemeName}
        placeholder="Current Password"
        {...register('oldPassword')}
      />
      <ErrorText errors={errors.oldPassword?.message} padding={errorPadding} />

      {/* new password */}
      <ProfileUpdateLabel text="New Password" htmlFor="updateProfileNewPassword" />
      <Input
        type="password"
        id="updateProfileNewPassword"
        inputType="text"
        inputThemeName={textThemeName}
        placeholder="New Password"
        {...register('newPassword')}
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
      {isSuccess && <CustomizedSnackbars type="success" message="Change password successfully" />}
      {isError && (
        <CustomizedSnackbars type="error" message={error?.response?.data?.errors_message} />
      )}
    </StyledForm>
  );
};

ChangePasswordForm.propTypes = {};

export default ChangePasswordForm;
