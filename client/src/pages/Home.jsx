import PropTypes from 'prop-types';
import MainNav from '@/components/Sections/NavSection/MainNav';
import { HOME_PATH } from '@/assets/Constant';

function Home() {
  return (
    <div>
      <h1>HOME NE </h1>
      <MainNav currentTab={HOME_PATH} />
    </div>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func,
  theme: PropTypes.string
};

export default Home;
