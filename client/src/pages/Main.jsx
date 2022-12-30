import MainNav from '@/components/Sections/NavSection/MainNav';
import { StyledPage } from './Page.styled';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SMALL_MOBILE_QUERY, MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY } from '@/assets/Constant';
import { HOME_PATH } from '@/assets/Constant';
import { useChange } from '@/hooks/useChange';
import { Outlet } from 'react-router-dom';
import { useMemo } from 'react';

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

const Main = ({ theme }) => {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  const { horizontalSpaces } = useMemo(() => {
    const horizontalSpaces = renderPropsResponsive('horizontalPadding', responsiveCondition);

    return { horizontalSpaces };
  }, [location, responsiveCondition]);
  const { value: currentTab, onSetNewValue: changeTab } = useChange(HOME_PATH);
  return (
    <StyledPage
      gridTemplateAreas={findGridTemplateAreas(responsiveCondition)}
      padding="0 3em"
      ai="flex-start">
      <MainNav theme={theme} currentTab={currentTab} changeTab={changeTab} gridArea="nav" />
      <Outlet context={{ horizontalSpaces }} />
    </StyledPage>
  );
};
const findGridTemplateAreas = (queries) => {
  if (queries.mobile)
    return `
      "main"
      "side"
      `;
  else if (queries.desktop)
    return `
      "nav main side" auto /
      0.5fr 2fr 0.5fr
      `;
  else
    return `
      "nav main" auto
      "nav side" auto /
      1fr 1fr
      `;
};

Main.propTypes = {
  theme: PropTypes.string,
  themeToggler: PropTypes.func
};

export default Main;
