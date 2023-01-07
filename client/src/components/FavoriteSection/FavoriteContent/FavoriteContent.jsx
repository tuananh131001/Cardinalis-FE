import React from 'react';
import { FavoriteContentStyled } from './FavoriteContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import { youUser } from '@/assets/data/UserData';
import PropTypes from 'prop-types';

function FavoriteContent() {
  const user = youUser;

  return (
    <FavoriteContentStyled>
      <HeaderSection content="Favorite" subContent={`@${user.username}`} leftType="none" />
    </FavoriteContentStyled>
  );
}
FavoriteContent.propTypes = {
  currentTab: PropTypes.string
};
export default FavoriteContent;
