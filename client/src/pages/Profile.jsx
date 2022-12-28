import { PROFILE_PATH } from '@/assets/Constant';
import MainNav from '@/components/Sections/NavSection/MainNav';
import { StyledPage } from './Page.styled';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SMALL_MOBILE_QUERY, MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY } from '@/assets/Constant';

// Remember to use useMemo to prevent unnecessary re-rendering if have performance issue
const Profile = ({ user }) => {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  // determine the type of authentication page and the gridTemplateAreas
  // const { gridTemplateAreas, displayedText } = useMemo(() => {
  //   const gridTemplateAreas = findGridTemplateAreas(responsiveCondition);

  //   return { gridTemplateAreas, displayedText };
  // }, [responsiveCondition]);
  return (
    <StyledPage gridTemplateAreas={findGridTemplateAreas(responsiveCondition)} >
      <MainNav currentTab={PROFILE_PATH} gridArea="nav" />
      
    </StyledPage>
  );
};

const findGridTemplateAreas = (queries) => {
  if (queries.mobile)
    return `
    "theme"
    "text"
    "image"
    "nav"
    "form"
    `;
  else if (queries.desktop)
    return `
    "nav back theme" auto
    "nav image text" auto /
    0.5fr 2fr 0.5fr
    `;
  else
    return `
    "nav theme" 0.1fr
    "form image" 1fr
    "form text" 1fr /
    1fr 1fr
    `;
};

Profile.propTypes = {
  user: PropTypes.object
};

export default Profile;
