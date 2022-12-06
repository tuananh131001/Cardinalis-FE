import styled, { css } from 'styled-components';

// General reusable buttons styles
const StyledGeneralButton = css`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ wrap }) => wrap};
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

// Styled Componeny
const StyledButton = styled.button`
  ${StyledGeneralButton}
  background-color: ${({ theme }) => theme.button.backgroundColor};
`;
export const StyledIconButton = styled.button`
  flex: 0 0;
  ${StyledGeneralButton}
  border: none;
  background-color: transparent;
`;

// Default Props
const generalDefaultProps = {
  direction: 'row',
  gap: '0',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap'
};
StyledButton.defaultProps = {
  ...generalDefaultProps
};
StyledIconButton.defaultProps = {
  ...generalDefaultProps
};

export default StyledButton;
