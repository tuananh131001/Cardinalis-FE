import React, { useMemo } from 'react';
import { StyledPage } from './Page.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthenImage from '@/components/Sections/AuthenSection/AuthenImage';
import AuthenNav from '@/components/Sections/NavSection/AuthenNav';
import AuthenSwitchTheme from '@/components/Sections/NavSection/AuthenSwitchTheme';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY, SMALL_MOBILE_QUERY } from '@/assets/Constant';
import AuthenText from '@/components/Sections/AuthenSection/AuthenText';
import {
  findDisplayText,
  findGridTemplateAreas,
  renderPropsResponsive
} from '@/helpers/AuthenticationDisplay';
import { PageAnimation } from '@/styles/AnimationConstant';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import LoginForm from '@/components/Form/LoginForm';
import RegisterForm from '@/components/Form/RegisterForm';

const Authentication = ({ theme, themeToggler }) => {
  const location = useLocation();
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  // determine the type of authentication page and the gridTemplateAreas
  const { type, gridTemplateAreas, displayedText } = useMemo(() => {
    const type = extractPath(location.pathname, /[^/]*$/);
    const gridTemplateAreas = findGridTemplateAreas(type, responsiveCondition);
    const displayedText = findDisplayText(type);

    return { type, gridTemplateAreas, displayedText };
  }, [location, responsiveCondition]);

  return (
    <StyledPage
      variants={PageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      gridTemplateAreas={gridTemplateAreas}
      padding={renderPropsResponsive('padding', responsiveCondition)}>
      <AuthenNav gridArea="nav" currentTab={type} responsiveCondition={responsiveCondition} />
      <AuthenImage gridArea="image" theme={theme} responsiveCondition={responsiveCondition} />
      <AuthenSwitchTheme gridArea="theme" theme={theme} themeToggler={themeToggler} />
      <AuthenText gridArea="text" {...displayedText} responsiveCondition={responsiveCondition} />
      {type == 'login' ? <LoginForm /> : <RegisterForm />}
    </StyledPage>
  );
};

Authentication.propTypes = {
  theme: PropTypes.string,
  themeToggler: PropTypes.func
};

export default Authentication;
