import React from 'react';
import ButtonStyled from '@/components/Button/Button.styled';
import PropTypes from 'prop-types';

function Button({ direction, gap, jc, ai, wrap, children, onClick }) {
  return (
    <ButtonStyled onClick={onClick} gap={gap} jc={jc} ai={ai} wrap={wrap} direction={direction}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  direction: PropTypes.string,
  gap: PropTypes.string,
  jc: PropTypes.string,
  ai: PropTypes.string,
  wrap: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.any
};

export default Button;
