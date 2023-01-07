import React from 'react';
import { FavoriteContentStyled } from './FavoriteContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import { youUser } from '@/assets/data/UserData';
function FavoriteContent() {
  const user = youUser;

  return (
    <FavoriteContentStyled>
      <HeaderSection content="Favorite" subContent={`@${user.username}`} haveBackButton={false} />
    </FavoriteContentStyled>
  );
}

export default FavoriteContent;
