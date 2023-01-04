import PropTypes from 'prop-types';
import React from 'react';
import { useGetUserInfo } from '@/hooks/useUser';
import { useSelector } from 'react-redux';
import { FlexContainer } from '@/components/Container/Container.styled';
import { pageContentTemplate } from '@/helpers/PageContentDisplay';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import { useOutletContext } from 'react-router-dom';
import TweetInput from '@/components/Sections/TweetSection/TweetInput';

function Home({ ...props }) {
  const { user } = useSelector((state) => state.user);
  const { data: UserInfo, isError, isLoading, error } = useGetUserInfo(user.username);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;
  console.log(UserInfo?.data);

  const { theme, themeToggler } = useOutletContext();
  return (
    <FlexContainer {...pageContentTemplate} {...props}>
      <HeaderSection
        content="Home"
        haveBackButton={false}
        theme={theme}
        themeToggler={themeToggler}
      />
      <TweetInput />
    </FlexContainer>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func,
  theme: PropTypes.string
};

export default Home;
