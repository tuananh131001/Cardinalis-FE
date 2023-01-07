import React from 'react';
import { ExploreContentStyled } from './ExploreContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import { youUser } from '@/assets/data/UserData';
import PropTypes from 'prop-types';

function ExploreContent() {
  const user = youUser;

  return (
    <ExploreContentStyled>
      <HeaderSection content="Explore" leftType="none" />
    </ExploreContentStyled>
  );
}
ExploreContent.propTypes = {
  currentTab: PropTypes.string
};
export default ExploreContent;
