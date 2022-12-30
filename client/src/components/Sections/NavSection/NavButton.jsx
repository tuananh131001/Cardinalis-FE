import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import NavElementIcon from './NavElementIcon';

const NavButton = ({
  icon,
  text,
  children,
  onClick,
  horizontalPadding,
  pseudoAfter = 2,
  buttonThemeName = 'secondaryButton',
  ...props
}) => {
  return (
    <Button
      buttonType="link"
      jc="flex-start"
      gap="1em"
      buttonThemeName={buttonThemeName}
      onClick={onClick}
      padding={`0.7em ${horizontalPadding}`}
      pseudoAfter={pseudoAfter}
      pseudoAfterBorderRadius={horizontalPadding}
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
  pseudoAfter: PropTypes.number,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default NavButton;
