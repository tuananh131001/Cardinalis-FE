import PropTypes from 'prop-types';
import { MainNavStyled } from './MainNav.styled';
import MainNavContent from './MainNavContent/MainNavContent';

const MainNav = ({ user, currentTab, ...props }) => {
  return (
    <MainNavStyled {...props}>
      <MainNavContent user={user} currentTab={currentTab} />
    </MainNavStyled>
  );
};

MainNav.propTypes = {
  user: PropTypes.object,
  theme: PropTypes.string,
  openModal: PropTypes.func,
  currentTab: PropTypes.string,
  location: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default MainNav;
