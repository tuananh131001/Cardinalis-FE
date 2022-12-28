import { StyledPage } from './Page.styled';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY } from '@/assets/Constant';
import RegisterText from '@/components/Sections/RegisterSections/RegisterText';
import AuthenNav from '@/components/Sections/NavSection/AuthenNav';
import RegisterForm from '@/components/Form/RegisterForm';
import RegisterImage from '@/components/Sections/RegisterSections/RegisterImage';
import { SMALL_MOBILE_QUERY } from '@/assets/Constant';
import PropTypes from 'prop-types';
import AuthenSwitchTheme from '@/components/Sections/NavSection/AuthenSwitchTheme';
import { PageAnimation } from '@/styles/AnimationConstant';

function Register({ theme, themeToggler }) {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  return (
    <StyledPage
      variants={PageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      gridTemplateAreas={renderPropsResponsive('gridTemplateAreas', responsiveCondition)}
      padding={renderPropsResponsive('padding', responsiveCondition)}>
      <AuthenNav gridArea="nav" currentTab="register" />
      <RegisterForm gridArea="form" />
      <RegisterImage gridArea="image" theme={theme} />
      <RegisterText gridArea="text" />
      <AuthenSwitchTheme gridArea="theme" theme={theme} themeToggler={themeToggler} />
    </StyledPage>
  );
}

const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'gridTemplateAreas':
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
      "nav . theme" 0.1fr
      "form image text" 1.5fr /
      1fr 1fr 1fr
      `;
      else
        return `
      "nav theme" 0.1fr
      "form image" 1fr
      "form text" 1fr /
      1fr 1fr
      `;
    case 'padding':
      if (queries.smallMobile) return '5em 1em';
      else if (queries.mobile) return '6em';
      else if (queries.desktop) return '5em 5.3em';
      else return '2em 3em';
  }
};
Register.propTypes = {
  theme: PropTypes.string,
  themeToggler: PropTypes.func
};

export default Register;
