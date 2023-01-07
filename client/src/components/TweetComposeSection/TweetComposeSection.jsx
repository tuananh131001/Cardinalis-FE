import React, { useMemo } from 'react';
import MainNav from '@/components/NavSection/MainNav';
import { useLocation } from 'react-router-dom';
import { youUser } from '@/assets/data/UserData';
import TweetComposeContent from './TweetComposeContent/TweetComposeContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import { TweetComposeSectionStyled } from './TweetComposeSection.style';
import SearchSection from '@/components/SearchSection/SearchSection';

function TweetComposeSection() {
  const user = youUser;

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
