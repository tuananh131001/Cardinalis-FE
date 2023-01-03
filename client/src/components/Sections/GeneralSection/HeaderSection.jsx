// https://reactrouter.com/en/6.4.4/hooks/use-outlet-context
// https://dev.to/nadeemkhanrtm/detect-scroll-direction-reactjs-1gnp
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { HiArrowSmLeft } from 'react-icons/hi';
import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';
import { useCallback, useEffect } from 'react';
import { useChange } from '@/hooks/useChange';
import AuthenSwitchTheme from '../NavSection/AuthenSwitchTheme';
import { IoMdClose } from 'react-icons/io';

const HeaderSection = ({
  backDestination = -1,
  content = 'hello',
  theme,
  themeToggler,
  zIndex = 1,
  haveBackButton = true,
  haveCloseButton = false,
  isFixedPosition = false,
  isDisplayTheme = true,
  ...props
}) => {
  const navigate = useNavigate();
  const { value: isScrolling, onSetNewValue: onChangeScrolling } = useChange(false);

  const handleNavigation = useCallback(() => {
    if (window.scrollY > 5) {
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

  // click navigate back
  const onClick = () => {
    navigate(backDestination, { replace: true });
  };
  return (
    <FlexContainer
      {...props}
      jc="flex-start"
      gap="0.7em"
      padding={`1em var(--horizontal-spaces)`}
      position={isFixedPosition ? 'fixed' : isScrolling ? 'sticky' : 'relative'}
      top="0"
      left="0"
      zIndex={zIndex}
      pseudoAfter={isScrolling || isFixedPosition ? '1' : 'none'}>
      {haveBackButton && (
        <Button
          buttonType="link"
          onClick={onClick}
          fontSize="var(--font-size-md)"
          width="fit-content"
          jc="flex-start"
          buttonThemeName="thirdButton"
          hoverType={2}
          borderRadius="50%"
          padding="0.3em">
          {<HiArrowSmLeft />}
        </Button>
      )}
      {haveCloseButton && (
        <Button
          buttonType="primary"
          buttonThemeName="secondaryButton"
          fontSize="var(--font-size-base)"
          width="fit-content"
          hoverType={2}
          borderRadius="50%"
          padding="0.3em">
          {<IoMdClose />}
        </Button>
      )}
      {typeof content === 'string' ? (
        <Text
          type="p"
          textThemeName="paragraphText"
          text={content}
          width="100%"
          txtAlign="left"
          weight="700"
        />
      ) : (
        content
      )}
      {isDisplayTheme == true && <AuthenSwitchTheme theme={theme} themeToggler={themeToggler} />}
    </FlexContainer>
  );
};

HeaderSection.propTypes = {
  haveBackButton: PropTypes.bool,
  haveCloseButton: PropTypes.bool,
  backDestination: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  theme: PropTypes.string,
  themeToggler: PropTypes.func,
  zIndex: PropTypes.number,
  isFixedPosition: PropTypes.bool,
  isDisplayTheme: PropTypes.bool
};
export default HeaderSection;
