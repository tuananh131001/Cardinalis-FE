import React from 'react';
import { HomeContentStyled } from './HomeContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import { youUser } from '@/assets/data/UserData';
import PropTypes from 'prop-types';
import TweetComposeCard from '@/components/TweetComposeSection/TweetComposeContent/TweetComposeCard';

function HomeContent() {
  const user = youUser;

  return (
    <HomeContentStyled>
      <HeaderSection content="Home" leftType="none" />
      <TweetComposeCard user={user} />{' '}
    </HomeContentStyled>
  );
}
HomeContent.propTypes = {
  currentTab: PropTypes.string
};
export default HomeContent;
