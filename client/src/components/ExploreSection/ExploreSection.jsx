import React from 'react';
import { ExploreSectionStyled } from './ExploreSection.styled';
import MainNav from '@/components/Sections/NavSection/MainNav';
import ExploreContent from './ExploreContent/ExploreContent';
import { useLocation } from 'react-router-dom';
import { youUser } from '@/assets/data/UserData';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useMemo } from 'react';
import SearchSection from '@/components/SearchSection/SearchSection';
// import { useMemo } from 'react';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  mainPathRegex
} from '@/assets/Constant';
import useMediaQuery from '@/hooks/useMediaQuery';
function ExploreSection() {
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
    <ExploreSectionStyled>
      <MainNav user={user} location={location} currentTab={currentTab} />
      <ExploreContent />
      <SearchSection />
    </ExploreSectionStyled>
  );
}

export default ExploreSection;
