import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';
import { HiArrowSmLeft } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const HeaderContentLeft = ({ type, backDestination, onClickClose }) => {
  const navigate = useNavigate();
  // click navigate back
  const onClickBack = () => {
    navigate(backDestination, { replace: true });
  };

  if (type == 'back')
    return (
      <Button
        className="left"
        onClick={onClickBack}
        buttonType="link"
        buttonThemeName="thirdButton"
        fontSize="var(--font-size-md)"
        hoverType={2}>
        {<HiArrowSmLeft />}
      </Button>
    );
  else if (type == 'close')
    return (
      <Button
        className="left"
        onClick={onClickClose}
        buttonType="primary"
        buttonThemeName="secondaryButton"
        fontSize="var(--font-size-base)"
        hoverType={2}>
        {<IoMdClose />}
      </Button>
    );
  else return null;
};

HeaderContentLeft.propTypes = {
  type: PropTypes.oneOf(['back', 'close', 'none']),
  backDestination: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClickClose: PropTypes.func,
  user: PropTypes.object,
  currentTab: PropTypes.string
};
