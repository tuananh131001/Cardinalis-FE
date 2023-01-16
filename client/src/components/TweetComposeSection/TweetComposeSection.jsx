import React, { useMemo } from 'react';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import { useLocation } from 'react-router-dom';
import TweetComposeContent from './TweetComposeContent/TweetComposeContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import { TweetComposeSectionStyled } from './TweetComposeSection.style';
import SearchSection from '@/components/SearchSection/SearchSection';
import { useSelector } from 'react-redux';

function TweetComposeSection() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);

  return (
    <TweetComposeSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <TweetComposeContent />
      <SearchSection />
    </TweetComposeSectionStyled>
  );
}
export default TweetComposeSection;
