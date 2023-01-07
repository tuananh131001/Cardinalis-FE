import React from 'react';
import { ExploreContentStyled } from './ExploreContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
// import { youUser } from '@/assets/data/UserData';
function ExploreContent() {
  // const user = youUser;

  return (
    <ExploreContentStyled>
      <HeaderSection content="Explore" haveBackButton={false} />
    </ExploreContentStyled>
  );
}

export default ExploreContent;
