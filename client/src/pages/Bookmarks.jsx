import { BOOKMARK_PATH } from '@/assets/Constant';
import MainNav from '@/components/Sections/NavSection/MainNav';

const Bookmarks = () => {
  return (
    <div>
      Bookmarks
      <MainNav currentTab={BOOKMARK_PATH} />
    </div>
  );
};

export default Bookmarks;
