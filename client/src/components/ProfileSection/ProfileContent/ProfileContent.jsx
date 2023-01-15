import React from 'react';
import { ProfileContentStyled } from './ProfileContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import MainInfoProfile from '@/components/ProfileSection/ProfileContent/MainInfoProfile';
import {
  HOME_PATH,
  PROFILE_NESTED_PATHS,
  PROFILE_FOLLOWERS_PATH,
  PROFILE_FOLLOWING_PATH
} from '@/assets/Constant';
import { useLocation } from 'react-router-dom';
import ProfileSubpage from './ProfileSubpage';
import PropTypes from 'prop-types';
import { displayCountNumber } from '@/helpers/HandleDisplayInfo';
import { useParams } from 'react-router-dom';
import { useGetUserInfo } from '@/hooks/useUser';
import { useSelector } from 'react-redux';
import Loading from '@/components/LoadingNothing/Loading';
import Nothing from '@/components/LoadingNothing/Nothing';

const defineBackDestination = (location, user) => {
  if (PROFILE_NESTED_PATHS.includes(location)) return `/${user.username}`;
  if (extractPath(location) == user.username) return `/${HOME_PATH}`;
  return -1;
};
const loadingPadding = 'var(--vertical-nothing-spaces) var(--horizontal-spaces)';
function ProfileContent({ pageSubType }) {
  // const user = youUser;
  const location = '/' + extractPath(useLocation().pathname);
  const { username } = useParams();
  const { data: user, isLoading, isError, error } = useGetUserInfo(username ?? '');
  const { user: currentUsername } = useSelector((state) => state.user);

  if (isError)
    return <Nothing padding={loadingPadding} text="Server Error" subText={error.message} />;
  if (isLoading) return <Loading padding={loadingPadding} />;
  console.log('Data in profile', user?.data);

  return (
    <ProfileContentStyled>
      <HeaderSection
        content={user?.data.username}
        subContent={displayCountNumber(10, 'Tweet')}
        leftType="back"
        backDestination={defineBackDestination(location, user)}
      />
      {!(location == PROFILE_FOLLOWERS_PATH || location == PROFILE_FOLLOWING_PATH) && (
        <MainInfoProfile user={user?.data} currentUsername={currentUsername.username} />
      )}
      {/* sub page content */}
      <ProfileSubpage type={pageSubType} user={user?.data} />
    </ProfileContentStyled>
  );
}
ProfileContent.propTypes = {
  pageSubType: PropTypes.string.isRequired
};
export default ProfileContent;
