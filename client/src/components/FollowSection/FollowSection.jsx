import React, { useMemo } from 'react';
import { FollowSectionStyled } from './FollowSection.styled';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import { useLocation, useParams } from 'react-router-dom';
import SearchSection from '@/components/SearchSection/SearchSection';
import PropTypes from 'prop-types';
import FollowContent from './FollowContent/FollowContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import { useGetUserInfo } from '@/hooks/useUser';

function FollowSection({ type }) {
  const { username } = useParams();
  const { data: user, isLoading, isError, error } = useGetUserInfo(username ?? '');
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <FollowSectionStyled>
      <MainNav user={user} currentTab={currentTab} />
      <FollowContent user={user} type={type} />
      <SearchSection />
    </FollowSectionStyled>
  );
}
FollowSection.propTypes = {
  type: PropTypes.string.isRequired
};
export default FollowSection;
