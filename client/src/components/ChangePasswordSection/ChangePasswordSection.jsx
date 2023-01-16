import React, { useMemo } from 'react';
import { ChangePasswordSectionStyled } from './ChangePasswordSection.styled';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import { useLocation } from 'react-router-dom';
import SearchSection from '@/components/SearchSection/SearchSection';
// import PropTypes from 'prop-types';
import ChangePasswordContent from './ChangePasswordContent/ChangePasswordContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import { useSelector } from 'react-redux';

function ChangePasswordSection() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);

  return (
    <ChangePasswordSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <ChangePasswordContent user={user} />
      <SearchSection />
    </ChangePasswordSectionStyled>
  );
}
ChangePasswordSection.propTypes = {};
export default ChangePasswordSection;
