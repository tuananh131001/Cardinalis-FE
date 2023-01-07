import React from 'react';
import { ProfileSectionStyled } from './ProfileSection.styled';
import MainNav from '@/components/Sections/NavSection/MainNav';
import ProfileContent from './ProfileContent/ProfileContent';
import { useLocation } from 'react-router-dom';
import { youUser } from '@/assets/data/UserData';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useMemo } from 'react';
import SearchSection from '@/components/SearchSection/SearchSection';
import PropTypes from 'prop-types';
// import { useMemo } from 'react';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  mainPathRegex
} from '@/assets/Constant';
import useMediaQuery from '@/hooks/useMediaQuery';
function ProfileSection({ pageSubType }) {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  const user = youUser;
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location, responsiveCondition]);
  return (
    <ProfileSectionStyled>
      <MainNav user={user} location={location} currentTab={currentTab} />
      <ProfileContent pageSubType={pageSubType} />
      <SearchSection />
    </ProfileSectionStyled>
  );
}
ProfileSection.propTypes = {
  pageSubType: PropTypes.string.isRequired
};
export default ProfileSection;
