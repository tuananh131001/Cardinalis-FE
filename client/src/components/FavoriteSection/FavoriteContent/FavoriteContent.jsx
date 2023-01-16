import React from 'react';
import { FavoriteContentStyled } from './FavoriteContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import PropTypes from 'prop-types';
import Nothing from '@/components/LoadingNothing/Nothing';
import { useSelector } from 'react-redux';

function FavoriteContent() {
  const { user } = useSelector((state) => state.user);

  return (
    <FavoriteContentStyled>
      <HeaderSection content="Favorite" subContent={`@${user.username}`} leftType="none" />
      <Nothing
        text="Save Tweets for Later"
        subText="Don't let the good ones fly away! Save Tweets to easily find them again in the future."
      />
    </FavoriteContentStyled>
  );
}
FavoriteContent.propTypes = {
  currentTab: PropTypes.string
};
export default FavoriteContent;
