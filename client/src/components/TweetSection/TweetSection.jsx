import React, { useMemo } from 'react';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SearchSection from '@/components/SearchSection/SearchSection';
import TweetContent from './TweetContent/TweetContent';
import { useSelector } from 'react-redux';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import { TweetSectionStyled } from './TweetSection.style';

function TweetSection({ tweet }) {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  console.log(params);
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);

  return (
    <TweetSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <TweetContent tweet={tweet} />
      <SearchSection />
    </TweetSectionStyled>
  );
}
export default TweetSection;
