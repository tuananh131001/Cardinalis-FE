import React from 'react';
import { HomeContentStyled } from './HomeContent.styled';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import TweetInputCard from '@/components/Sections/TweetSection/TweetInputCard';
import TweetList from '@/components/Sections/TweetSection/TweetList';
import { youUser } from '@/assets/data/UserData';
function HomeContent() {
  const user = youUser;

  return (
    <HomeContentStyled>
      <HeaderSection content="Home" haveBackButton={false} />
      <TweetInputCard user={user} />
      <TweetList />
    </HomeContentStyled>
  );
}

export default HomeContent;
