import styled, { css } from 'styled-components';
import { BORDER_RADIUS_SECONDARY } from '@/styles/Constant';

// Reusable CSS
const StyledGeneralInput = css`
  /* border */
  border-radius: ${(props) => props.borderRadius};
  border: none;
  /* font */
  font-family: var(--font-family);
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  /* color */
  color: ${({ theme }) => theme.input.color};
  background-color: ${({ theme }) => theme.input.backgroundColor};

  /* placeholder */
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  &::-moz-input-placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    outline: none;
  }
`;

// Styled Components
export const StyledTextArea = styled.textarea`
  ${StyledGeneralInput}
  resize: none;
  overflow: hidden;
  line-height: 1em;
  padding: ${(props) => props.padding};
`;
export const StyledInput = styled.input`
  ${StyledGeneralInput}
  padding: ${(props) => props.padding};

  /* &:focus {
    outline: ${({ theme }) => theme.input.outlineColor};
  } */
`;

// Default Props
StyledTextArea.defaultProps = {
  weight: 500,
  size: 'clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem)',
  borderRadius: BORDER_RADIUS_SECONDARY,
  padding: '0.9em 0.8em 2em'
};
StyledInput.defaultProps = {
  weight: 500,
  size: 'clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem)',
  borderRadius: BORDER_RADIUS_SECONDARY,
  padding: '0.7em 0.8em'
};
