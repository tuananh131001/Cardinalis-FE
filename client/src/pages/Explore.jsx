import { EXPLORE_PATH } from '@/assets/Constant';
import MainNav from '@/components/Sections/NavSection/MainNav';

const Explore = () => {
  return (
    <div>
      Explore
      <MainNav currentTab={EXPLORE_PATH} />
    </div>
  );
};

export default Explore;
