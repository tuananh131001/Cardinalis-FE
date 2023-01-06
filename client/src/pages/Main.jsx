import MainNav from '@/components/Sections/NavSection/MainNav';
import { StyledPage } from './Page.styled';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  mainPathRegex
} from '@/assets/Constant';
import { Outlet, useLocation } from 'react-router-dom';
import { youUser } from '@/assets/data/UserData';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useMemo } from 'react';
// import { useMemo } from 'react';

export const renderPropsResponsive = (propsName, queries, type = 'element') => {
  if (type == 'element') {
    switch (propsName) {
      case 'horizontalPadding':
        if (queries.smallMobile) return '0.5e,';
        else if (queries.mobile) return '0.5em';
        else if (queries.desktop) return '1.2em';
        else return '1em';
    }
  }
};

const Main = ({ user = youUser, theme, themeToggler }) => {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location, responsiveCondition]);
  return (
    <StyledPage
      gridTemplateAreas={findGridTemplateAreas(responsiveCondition)}
      padding="0 10em"
      gap="7em"
      ai="flex-start">
      <MainNav
        user={user}
        theme={theme}
        location={location}
        currentTab={currentTab}
        gridArea="nav"
      />
      <Outlet context={{ theme, themeToggler, user }} />
    </StyledPage>
  );
};
const findGridTemplateAreas = (queries) => {
  if (queries.mobile)
    return `
      "main"
      "nav" auto 
      `;
  else if (queries.desktop)
    return `
      "nav main" auto /
      auto 2.5fr
      `;
  else
    return `
      "nav main" auto
      "nav main" auto /
      1fr 1fr
      `;
};

Main.propTypes = {
  user: PropTypes.object,
  theme: PropTypes.string,
  themeToggler: PropTypes.func
};

export default Main;
