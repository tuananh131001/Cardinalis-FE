import React from 'react';
import { FavoriteSectionStyled } from './FavoriteSection.styled';
import MainNav from '@/components/NavSection/MainNav';
import FavoriteContent from './FavoriteContent/FavoriteContent';
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
function FavoriteSection() {
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
    <FavoriteSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <FavoriteContent />
      <SearchSection />
    </FavoriteSectionStyled>
  );
}

export default FavoriteSection;
