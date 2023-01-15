import React from 'react';
import { HomeSectionStyled } from './HomeSection.styled';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import { useLocation } from 'react-router-dom';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import RightSection from '@/components/RightSection/RightSection';
import HomeContent from './HomeContent/HomeContent';

// import { useMemo } from 'react';
import { mainPathRegex } from '@/assets/Constant';
function HomeSection() {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);
  return (
    <HomeSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <HomeContent />
      <RightSection />
    </HomeSectionStyled>
  );
}

export default HomeSection;
