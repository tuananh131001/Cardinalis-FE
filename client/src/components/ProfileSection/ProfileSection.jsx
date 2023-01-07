import React from 'react';
import { ProfileSectionStyled } from './ProfileSection.styled';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import ProfileContent from './ProfileContent/ProfileContent';
import { useLocation } from 'react-router-dom';
import { youUser } from '@/assets/data/UserData';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useMemo } from 'react';
import SearchSection from '@/components/SearchSection/SearchSection';
import PropTypes from 'prop-types';
import { mainPathRegex } from '@/assets/Constant';

function ProfileSection({ pageSubType }) {
  const user = youUser;
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);
  return (
    <ProfileSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <ProfileContent pageSubType={pageSubType} />
      <SearchSection />
    </ProfileSectionStyled>
  );
}
ProfileSection.propTypes = {
  pageSubType: PropTypes.string.isRequired
};
export default ProfileSection;
