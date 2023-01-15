import React from 'react';
import { ExploreSectionStyled } from './ExploreSection.styled';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import ExploreContent from './ExploreContent/ExploreContent';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useMemo } from 'react';
import SearchSection from '@/components/SearchSection/SearchSection';
import { mainPathRegex } from '@/assets/Constant';
function ExploreSection() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);
  return (
    <ExploreSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <ExploreContent />
      <SearchSection />
    </ExploreSectionStyled>
  );
}

export default ExploreSection;
