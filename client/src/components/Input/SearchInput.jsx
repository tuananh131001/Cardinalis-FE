// https://stackoverflow.com/questions/65255298/how-to-conditionally-disable-the-submit-button-with-react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import { Input } from '@/components/Input/Input';
import { StyledForm } from '@/components/Form/Form.styled';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { SEARCH_PATH } from '@/assets/Constant';

const SearchInput = ({ ...props }) => {
  const navigate = useNavigate();
  const schema = chooseInputSchema('search');
  const defaultValues = { search: '' };
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema)
  });
  const searchRegister = register('search');
  const logValue = debounce((value) => {
    console.log(value);
  }, 1000);
  const customOnChange = (event) => {
    logValue(getValues('search'));
    searchRegister.onChange(event);
  };
  const onSubmitClick = (data) => {
    console.log('Search', data);
    // search action
    navigate(`/${SEARCH_PATH}/${data.search}`);
  };
  return (
    <StyledForm
      height="auto"
      {...props}
      onSubmit={handleSubmit(onSubmitClick)}
      padding={`0.5em 1em`}
      jc="flex-start">
      <Input
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Search"
        {...searchRegister}
        onChange={customOnChange}
      />
    </StyledForm>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
