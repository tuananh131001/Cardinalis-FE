// https://bobbyhadz.com/blog/react-import-image
import Image from '@/components/Image/Image';
import Icon from '@/assets/images/icon.png';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import { useContext } from 'react';

const NavImage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Image
      className="nav-image"
      src={Icon}
      alt="Small Icon"
      themeName={theme}
      width="3em"
      alignSelf="flex-start"
    />
  );
};

export default NavImage;
