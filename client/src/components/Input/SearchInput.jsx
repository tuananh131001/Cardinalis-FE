// https://stackoverflow.com/questions/65255298/how-to-conditionally-disable-the-submit-button-with-react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { chooseInputSchema } from '@/helpers/ValidatingInput';
import { Input } from '@/components/Input/Input';
import { StyledForm } from '@/components/Form/Form.styled';
import { createSearchParams } from 'react-router-dom';
import { SEARCH_PATH } from '@/assets/Constant';
import { useState } from 'react';
import { useSearchUsers } from '@/hooks/useUser';
import useDebounce from '@/hooks/useDebounce';

const SearchInput = ({ ...props }) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 1000);
  const { data, isLoading, isError, error } = useSearchUsers(debouncedSearchTerm);
  console.log(data?.data);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <StyledForm height="auto" {...props} padding={`0.5em 1em`} jc="flex-start">
      <Input
        inputType="text"
        inputThemeName="loginInput"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </StyledForm>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
