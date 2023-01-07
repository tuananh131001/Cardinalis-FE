// https://stackoverflow.com/questions/65255298/how-to-conditionally-disable-the-submit-button-with-react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema, maxTweetCharacters } from '@/helpers/ValidatingInput';
import { Input } from '@/components/Input/Input';
import { StyledForm } from '@/components/Form/Form.styled';
import StyledButton from '@/components/Button/Button.styled';
import { ErrorText } from '@/components/Text/ErrorText';

const TweetInput = ({ ...props }) => {
  const schema = chooseInputSchema('tweet');
  const defaultValues = { tweet: '' };
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
    getValues
  } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });

  const onSubmitClick = (data) => {
    console.log('Tweet', data);
    // if (isDirty && isValid) {
    //   console.log(data);
    // } else {
    //   console.log('invalid');
    // }
  };
  return (
    <StyledForm
      height="auto"
      {...props}
      onSubmit={handleSubmit(onSubmitClick)}
      padding={`0.5em 1em`}
      jc="flex-start">
      <Input
        inputType="textarea"
        inputThemeName="homeInput"
        placeholder="What's happening?"
        onChange={register('tweet').onChange}
        {...register('tweet')}
      />

      <ErrorText
        errors={
          getValues('tweet').length > maxTweetCharacters
            ? maxTweetCharacters - getValues('tweet').length
            : ''
        }
      />
      <StyledButton
        alignSelf="flex-end"
        width="fit-content"
        borderRadius="25px"
        type="submit"
        disabled={!isDirty || !isValid}
        padding="0.75em 1.5em"
        textTransform="capitalize"
        cursor="pointer"
        buttonThemeName="primaryButton">
        Tweet
      </StyledButton>
    </StyledForm>
  );
};

TweetInput.propTypes = {};

export default TweetInput;
