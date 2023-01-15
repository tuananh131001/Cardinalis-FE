import Text from '@/components/Text/Text';
import { FooterStyled } from './Footer.style';

const Footer = () => {
  return (
    <FooterStyled>
      <Text type="p3" textThemeName="subText" text="@ 2022 Cardinalis" weigt="700" />
    </FooterStyled>
  );
};

Footer.propTypes = {};

export default Footer;
