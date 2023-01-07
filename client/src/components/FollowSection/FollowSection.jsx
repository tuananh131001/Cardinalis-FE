import React, { useMemo } from 'react';
import { FollowSectionStyled } from './FollowSection.styled';
import MainNav from '@/components/Sections/NavSection/MainNav';
import { useLocation } from 'react-router-dom';
import { youUser } from '@/assets/data/UserData';
import SearchSection from '@/components/SearchSection/SearchSection';
import PropTypes from 'prop-types';
import FollowContent from './FollowContent/FollowContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';

function FollowSection({ type }) {
  const user = youUser;

  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);

  return (
    <FollowSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <FollowContent type={type} />
      <SearchSection />
    </FollowSectionStyled>
  );
}
FollowSection.propTypes = {
  type: PropTypes.string.isRequired
};
export default FollowSection;
