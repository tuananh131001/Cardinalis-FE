import { StyledPage } from './Page.styled';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY } from '@/styles/Constant';
import RegisterText from '@/components/Sections/RegisterSections/RegisterText';
import AuthenNav from '@/components/Sections/NavSection/AuthenNav';
import RegisterForm from '@/components/Form/RegisterForm';
import RegisterImage from '@/components/Sections/RegisterSections/RegisterImage';
import { SMALL_MOBILE_QUERY } from '@/styles/Constant';

function Register() {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  return (
    <StyledPage
      gridTemplateAreas={renderPropsResponsive('gridTemplateAreas', responsiveCondition)}
      padding={renderPropsResponsive('padding', responsiveCondition)}>
      <AuthenNav gridArea="nav" />
      <RegisterForm gridArea="form" />
      <RegisterImage gridArea="image" />
      <RegisterText gridArea="text" />
    </StyledPage>
  );
}

const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'gridTemplateAreas':
      if (queries.mobile)
        return `
      "text"
      "image"
      "nav"
      "form"
      `;
      else if (queries.desktop)
        return `
      "nav . ." 0.1fr
      "form image text" 1.5fr /
      1fr 1fr 1fr
      `;
      else
        return `
      "nav ." 0.1fr
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

export default Register;
