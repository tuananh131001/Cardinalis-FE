import styled, { css } from 'styled-components';
import { BORDER_RADIUS_SECONDARY } from '@/styles/Constant';

// Reusable CSS
const StyledGeneralInput = css`
  line-height: 1em;
  padding: 1em 0.8em 2em;
  /* border */
  border-radius: ${(props) => props.borderRadius};
  border: 2px solid ${({ theme }) => theme.input.color};
  /* font */
  font-family: var(--font-family);
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  /* color */
  color: ${({ theme }) => theme.input.color};
  background-color: ${({ theme }) => theme.input.backgroundColor};

  &:focus {
    outline: none;
  }

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
`;

// Styled Components
export const StyledTextArea = styled.textarea`
  ${StyledGeneralInput}
  resize: none;
  overflow: hidden;
`;
export const StyledInput = styled.input`
  ${StyledGeneralInput}
`;

// Default Props
StyledTextArea.defaultProps = {
  weight: 500,
  size: 'clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem)',
  borderRadius: BORDER_RADIUS_SECONDARY
};
StyledInput.defaultProps = StyledTextArea.defaultProps;
