import { SETTINGS_PATH } from '@/assets/Constant';
import MainNav from '@/components/Sections/NavSection/MainNav';

const Settings = () => {
  return (
    <div>
      Settings
      <MainNav currentTab={SETTINGS_PATH} />
    </div>
  );
};

export default Settings;
