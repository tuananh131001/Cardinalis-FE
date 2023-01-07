// https://reactrouter.com/en/6.4.4/hooks/use-outlet-context
// https://dev.to/nadeemkhanrtm/detect-scroll-direction-reactjs-1gnp
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { useChange } from '@/hooks/useChange';
import { HeaderSectionStyled } from './HeaderSection.styled';
import { HeaderContentLeft } from './HeaderContent/HeaderContentLeft';
import HeaderContentCenter from './HeaderContent/HeaderContentCenter';
import HeaderContentRight from './HeaderContent/HeaderContentRight';

const HeaderSection = ({
  backDestination = -1,
  content = 'hello',
  subContent = null,
  // style
  zIndex = 1,
  backgroundStyle = 1,
  isFixedPosition = false,
  // button
  leftType = 'back', // can be "back" | "close" | "none"
  rightType = 'theme', // can be "theme" | "none"
  // action
  onClickClose,
  ...props
}) => {
  // detect onscroll
  const { value: isScrolling, onSetNewValue: onChangeScrolling } = useChange(false);
  const handleNavigation = useCallback(() => {
    if (window.scrollY > 10) {
      onChangeScrolling(true);
    } else {
      onChangeScrolling(false);
    }
  }, [window.scrollY]);
  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <HeaderSectionStyled
      {...props}
      position={isFixedPosition ? 'fixed' : isScrolling ? 'sticky' : 'relative'}
      zIndex={zIndex}
      pseudoAfter={isScrolling || isFixedPosition ? backgroundStyle : 0}>
      <HeaderContentLeft
        type={leftType}
        backDestination={backDestination}
        onClickClose={onClickClose}
      />
      <HeaderContentCenter content={content} subContent={subContent} />
      <HeaderContentRight type={rightType} />
    </HeaderSectionStyled>
  );
};

HeaderSection.propTypes = {
  leftType: PropTypes.oneOf(['back', 'close', 'none']),
  rightType: PropTypes.oneOf(['theme', 'none']),
  user: PropTypes.object,
  backDestination: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentTab: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  subContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  zIndex: PropTypes.number,
  backgroundStyle: PropTypes.number,
  isFixedPosition: PropTypes.bool,
  onClickClose: PropTypes.func
};
export default HeaderSection;
