import React from 'react';
import { HomeContentStyled } from './HomeContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import TweetInputCard from '@/components/TweetSection/TweetInputCard';
import { youUser } from '@/assets/data/UserData';
import PropTypes from 'prop-types';
import TweetComposeCard from '@/components/TweetComposeSection/TweetComposeContent/TweetComposeCard';
  const user = youUser;

  return (
    <HomeContentStyled>
      <HeaderSection content="Home" haveBackButton={false} />
      <TweetInputCard user={user} />{' '}
    </HomeContentStyled>
  );
}

export default HomeContent;
