import React, { useMemo } from 'react';
import MainNav from '@/components/Sections/NavSection/MainNav';
import { useLocation } from 'react-router-dom';
import { youUser } from '@/assets/data/UserData';
import SearchSection from '@/components/SearchSection/SearchSection';
import TweetContent from './TweetContent/TweetContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import { TweetSectionStyled } from './TweetSection.style';

function TweetSection() {
  const user = youUser;

  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);

  return (
    <TweetSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <TweetContent />
      <SearchSection />
    </TweetSectionStyled>
  );
}
export default TweetSection;
