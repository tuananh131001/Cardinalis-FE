import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import NavElementIcon from './NavElementIcon';

const NavButton = ({
  icon,
  text,
  children,
  onClick,
  buttonThemeName = 'secondaryButton',
  ...props
}) => {
  return (
    <Button
      buttonType="link"
      jc="flex-start"
      textTransform="capitalize"
      gap="1em"
      buttonThemeName={buttonThemeName}
      onClick={onClick}
      hoverType={2}
      width="auto"
      {...props}>
      {icon && <NavElementIcon>{icon}</NavElementIcon>}
      {text}
      {children && children}
    </Button>
  );
};
NavButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  horizontalPadding: PropTypes.string,
  buttonThemeName: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default NavButton;
