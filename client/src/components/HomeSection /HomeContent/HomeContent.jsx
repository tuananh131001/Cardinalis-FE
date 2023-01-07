import React from 'react';
import { HomeContentStyled } from './HomeContent.styled';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import TweetInputCard from '@/components/TweetSection/TweetInputCard';
import { youUser } from '@/assets/data/UserData';
function HomeContent() {
  const user = youUser;

  return (
    <HomeContentStyled>
      <HeaderSection content="Home" haveBackButton={false} />
      <TweetInputCard user={user} />{' '}
    </HomeContentStyled>
  );
}

export default HomeContent;
