import PropTypes from 'prop-types';
import TweetSection from '@/components/Sections/TweetSection/TweetSection';
import { StyledPage } from './Page.styled';

function Home() {
  return (
    <StyledPage>
      <TweetSection />
    </StyledPage>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func,
  theme: PropTypes.string
};

export default Home;
