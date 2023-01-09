import React from 'react';
import { UpdateProfileSectionStyled } from './UpdateProfileSection.styled';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import UpdateProfileContent from './UpdateProfileContent/UpdateProfileContent';
import { useLocation } from 'react-router-dom';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import RightSection from '@/components/RightSection/RightSection';
// import { useMemo } from 'react';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  mainPathRegex
} from '@/assets/Constant';
import useMediaQuery from '@/hooks/useMediaQuery';
function UpdateProfileSection() {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location, responsiveCondition]);
  return (
    <UpdateProfileSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <UpdateProfileContent user={user} />
      <RightSection />
    </UpdateProfileSectionStyled>
  );
}

export default UpdateProfileSection;
